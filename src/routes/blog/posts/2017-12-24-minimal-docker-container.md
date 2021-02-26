---
layout: post
title: 'Minimal Docker container'
comments: false
categories: [docker]
---

With Docker multi stage, you can use multiple base image (call as builder) to build necessary files, assets and copy stuff over to final image after.

Here is some tricks:

-   You can use `node:alpine`, `bitnami-docker-node` or other smaller images if it's enough to build your app.
-   Copy necessary files only
-   Base node docker image included `yarn`, it's better some time (ex: build `node-sass`)

Example:

```dockerfile
# node builder
FROM node:8.9.3 as nodebuilder
RUN mkdir publish
COPY gulpfile.js webpack.config.js package.json publish/
COPY ./Vue publish/Vue
COPY ./wwwroot publish/wwwroot
WORKDIR /publish

RUN cd /publish && yarn install \
    && yarn gulp all \
    && yarn run build

# dotnet builder
FROM microsoft/dotnet:2.0.0-sdk as builder
RUN mkdir publish
COPY . publish
WORKDIR publish
RUN dotnet restore <app_name>.csproj
RUN dotnet publish <app_name>.csproj --configuration Release --output ./out

# final image
FROM microsoft/dotnet:2.0.0-runtime
WORKDIR /dotnetapp
COPY --from=builder publish/out .
COPY --from=nodebuilder publish/wwwroot ./wwwroot
ENTRYPOINT ["dotnet", "<app_name>.dll"]
```
