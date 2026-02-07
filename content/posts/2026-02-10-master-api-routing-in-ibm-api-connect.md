---
title: 'Master API Routing in IBM API Connect'
description: 'Routing is the backbone of any API strategy. It determines how a client’s request gets from the front door to the right backend service. While basic routing is straightforward, high-level architectures often require more flexibility.'
published: '2026-02-10'
tags: ['api-connect', 'ibm', 'integration']
---

Here is a simplified guide to advanced routing techniques in **IBM API Connect** to help you build more dynamic and scalable APIs. You may already know some of this, but the concrete patterns and examples might still be helpful.

## How the Exposure URL is Constructed

IBM API Connect builds the final URL exposed to consumers by combining the **Catalog/Gateway Base Path** with the **Path** defined in your OpenAPI document. Understanding this structure is crucial for ensuring your consumers hit the correct endpoint.

The URL is generated using this logic: `https://{gateway-address}/{org}/{catalog}/{basePath}/{path}`

- **Gateway Address:** The domain of your DataPower/Gateway service.
- **Org/Catalog:** Defined by your API Connect environment.
- **Base Path:** Set in the `info` or `x-ibm-configuration` section of your YAML (e.g., `/myapi/v1`).
- **Path:** The specific resource endpoint (e.g., `/users/{userId}`).

::note
Always verify your `basePath` in the **General** tab of the API Manager. If your backend service also has a prefix, ensure you aren't "double-nesting" the paths (e.g., `/myapi/myapi/users`) unless intended.
::

## API Routing and Path Transformation

### 1. Handling Dynamic Paths

Use `{userId}` for variable URLs. You can define parameters manually for validation or use `$(request.path)` to forward the path automatically to your backend.

**YAML Sample:**

::code-group

```yaml [OpenAPI 3.0.yaml]
x-ibm-configuration:
  properties:
    target-url:
      value: https://api.backend.com$(request.path)
  assembly:
    execute:
      - invoke:
          target-url: $(target-url) # Pulls from the property for better visibility
paths:
  /users/{userId}:
    get:
      parameters:
        - in: path
          name: userId
          required: true
          schema:
            type: string # Moved inside schema
```

```yaml [OpenAPI 2.0.yaml]
x-ibm-configuration:
  properties:
    target-url:
      value: https://api.backend.com$(request.path)
  assembly:
    execute:
      - invoke:
          target-url: $(target-url) # Pulls from the property for better visibility
paths:
  /users/{userId}:
    get:
      parameters:
        - in: path
          name: userId
          required: true
          type: string # For OAS 2.0, 'type' is placed directly under the parameter
```

::

::note
**Configuration & Routing Best Practices**

- **Avoid Conflicts:** Ensure your dynamic paths (e.g., `/users/{userId}`) do not overlap with other API endpoints to prevent routing errors or requests hitting the wrong operation.
- **Property vs. Direct Mapping:** While you can add `$(request.path)` directly inside the **invoke** policy, defining it as a **property** is better for debugging and visibility.

::

::warning
Some API Manager UIs currently lack the input fields to define the `schema` or `type` options for OpenAPI 3.0. Because the format has changed from the previous version, the UI may inadvertently leave these out, leading to validation errors. To ensure your API definition is valid, **switch to Source Mode** and manually add the `schema` block as shown in the OAS 3.0 example above.
::

### 2. Forwarding Query Strings

Don't lose your filters or sort parameters when routing. To pass every query parameter from the client straight to the backend, append `?$(request.querystring)` (or `$(request.search)`) to your target URL.

**Target URL Configuration:**

```yaml
x-ibm-configuration:
  properties:
    target-url:
      value: https://api.backend.com$(request.path)?$(request.querystring)
      # value: https://api.backend.com$(request.path)$(request.search)
```

### 3. Wildcards for Multi-Level Paths

If you don't know how deep a URL path will go (e.g., a file directory), use path qualifiers to capture everything.

- **`*` (Star)**: Captures 0 or more path segments.
- **`+` (Plus)**: Requires at least one path segment.

```yaml
paths:
  /files/{*filePath}:
    get:
      parameters:
        - in: path
          name: '*filePath'
          required: true
          schema:
            type: string
```

::note
While wildcards are flexible, explicit parameters are safer because they allow for stricter data validation.
::

### 4. Stripping the Base Path

When your API Gateway uses a prefix (like `/myapi`) that your backend doesn't recognize, you must strip it to avoid 404 errors.

**YAML Sample:**

::code-group

```yaml [Context Variables]
x-ibm-configuration:
  properties:
    target-url:
      # Direct mapping using built-in context variables
      value: https://api.backend.com$(api.operation.path)?$(request.querystring)
  assembly:
    execute:
      - invoke:
          target-url: $(target-url)
```

```yaml [GatewayScript]
x-ibm-configuration:
  assembly:
    execute:
      - gatewayscript:
          version: 2.0.0
          title: Path Transformation
          source: |
            // Use this when you need to modify the string before sending
            var path = context.get('request.path');
            if (path.startsWith('/myapi')) {
              var newPath = path.substring(6); 
              context.set('request_path', newPath);
            }
      - invoke:
          version: 2.0.0
          title: Call backend
          # Uses the custom variable set in the script above
          target-url: https://api.backend.com$(request_path)?$(request.querystring)
```

::

::note
**Quick Decision Guide**

- **Use Context Variables** when the backend expects the exact same path/query as the incoming request. It’s cleaner, faster, and easier to maintain.
- **Use GatewayScript** when you need to "clean" the URL—such as removing a version prefix (/v1) or changing the path structure—before it hits your backend.

::

### 5. Passing "Hidden" Headers

By default, API Connect strips security headers like `X-IBM-Client-Id` after authentication. If your backend needs these for logging, you must manually re-inject them using a **Set Variable** policy.

**YAML Sample:**

```yaml
x-ibm-configuration:
  assembly:
    execute:
      - set-variable:
          actions:
            - set: message.headers.X-IBM-Client-Id
              value: $(client.app.id)
      - invoke:
          target-url: https://api.backend.com$(request.path)?$(request.querystring)
```

### Reference & Resources

To explore all available metadata you can inject into your `target-url` or use within GatewayScript, refer to the official documentation:

- [API Connect Context Variables](https://www.ibm.com/docs/en/api-connect/cloud/saas?topic=reference-api-connect-context-variables) _Essential for mastering `request`, `message`, `client`, `api` contexts and beyond._
