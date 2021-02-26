---
layout: post
title: 'ingress-nginx controller not work for fanout configuration'
comments: false
categories: [nginx, nginx ingress, kubernetes]
---

Firstly, I want to says: Reading CHANGE_LOG will help you reduce the pain.

`ingress-nginx` has breaking changes from [NGINX 0.22.0](https://github.com/kubernetes/ingress-nginx/releases/tag/nginx-0.22.0)

```
Annotation nginx.ingress.kubernetes.io/rewrite-target has changed and will not behave as expected if you don't update them.

Refer to https://kubernetes.github.io/ingress-nginx/examples/rewrite/#rewrite-target on how to change it.

Refer to [#3174 (comment)](https://github.com/kubernetes/ingress-nginx/pull/3174#issuecomment-455665710) on how to do seamless migration.
```

From the documentation page at https://kubernetes.io/docs/concepts/services-networking/ingress/, you can define a fanout configuration routes traffic from a single IP address to more than one service, based on the HTTP URI being requested. An Ingress allows you to keep the number of loadbalancers down to a minimum.

```yml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
    name: simple-fanout-example
    annotations:
        nginx.ingress.kubernetes.io/rewrite-target: /
spec:
    rules:
        - host: foo.bar.com
          http:
              paths:
                  - path: /foo
                    backend:
                        serviceName: service1
                        servicePort: 4200
                  - path: /bar
                    backend:
                        serviceName: service2
                        servicePort: 8080
```

However, it's not work as expected if you have updated to the version 0.22.0 or newer. You need to change these annotations:

```yml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
    name: simple-fanout-example
    annotations:
        nginx.ingress.kubernetes.io/rewrite-target: /$1
spec:
    rules:
        - host: foo.bar.com
          http:
              paths:
                  - path: /foo/?(.*)
                    backend:
                        serviceName: service1
                        servicePort: 4200
                  - path: /bar/?(.*)
                    backend:
                        serviceName: service2
                        servicePort: 8080
```

Enjoy your time!
