---
title: 'Exposing Response Headers to Frontend via CORS in IBM API Connect'
description: 'A quick guide on configuring CORS in IBM API Connect to expose backend response headers (e.g., Content-Disposition) so they can be accessed from frontend applications using fetch or axios.'
published: '2026-03-06'
tags: ['api-connect', 'ibm', 'integration', 'cors']
---

When calling APIs from browsers, you may notice that some response headers (for example `Content-Disposition`) are visible in **Postman, curl, or other backend clients**, but **cannot be accessed from frontend JavaScript**.

This happens because browsers enforce **CORS restrictions**.
Even if the backend returns the header, the browser will not expose it to JavaScript unless it is explicitly allowed by the API configuration.

In IBM API Connect, this behavior is controlled through the **CORS policy**.

## Expose Headers

To allow frontend JavaScript to access specific response headers, they must be listed in the **CORS Expose Headers** configuration.

For example, if your backend returns a file download header like:

```http
Content-Disposition: attachment; filename="report.xlsx"
```

The browser will **not allow frontend code to read it** unless the header is exposed through CORS.

Below is an example configuration inside the `x-ibm-configuration` section:

```yaml
x-ibm-configuration:
  properties:
    target-url:
      value: >-
        https://backend.example.com/api$(api.operation.path)$(request.search)

  cors:
    enabled: true
    policy:
      - allow-credentials: true
        expose-headers:
          backend: true
          predefined: true
          custom: Content-Disposition
        allow-origin:
          - https://frontend.example.com
```

With this configuration:

- `backend: true` exposes headers returned by the backend service
- `predefined: true` exposes standard headers defined by the gateway
- `custom` allows exposing additional headers such as `Content-Disposition`
- `allow-origin` must match the frontend application calling the API

After exposing the header, frontend code can read it normally:

```javascript
response.headers.get('content-disposition')
```

This is commonly required when APIs return downloadable files and the frontend needs to extract the filename from the response headers.

### ⚠️ Warning / Observed Behavior

During testing on **IBM API Connect v10.0.8.3**, I observed that all three options under `expose-headers` were required:

- `backend`
- `predefined`
- `custom`

Although documentation suggests that enabling `backend` should already expose backend response headers, the header was **not accessible in the browser unless the custom header (`Content-Disposition`) was explicitly added**.

Additionally, using `allow-origin: *` did not work reliably in my tests. Explicitly specifying the frontend origin worked correctly.
