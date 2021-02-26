---
layout: post
title: 'Host ASP.NET Core on Linux with Nginx'
comments: false
categories: [aspnetcore, nginx]
---

> This is a helper document guide how to setup, config and deploy an .NET Core Web Engine Hosting on an Ubuntu Server.

### Access to Linux server

Run below command and input password

```bash
ssh username@hosting/ip
```

You can copy your local ssh key to server and no need password to login next time

```bash
ssh-copy-id -i .ssh/id_rsa username@hosting/ip
```

### Install Nginx

```bash
sudo apt-get update
sudo apt-get install nginx
```

Since Nginx was installed for the first time, explicitly start it by running:

```bash
sudo systemctl start nginx
```

### Config Nginx

To config Nginx as a reserve proxy to forward request to ASP.NET Core app, modify `/etc/nginx/sites-available/default` and replace or create a new sites-available

```bash
cd /etc/nginx/sites-available
touch site_name
sudo nano site_name
```

with the following contents

```nginx
upstream site_name_svc  {
    server 127.0.0.1:5432;
}

server {
    server_name your_site_link;
    listen 80;

    root /usr/share/nginx/html;
    index index.html index.htm;

    location / {
        proxy_pass http://site_name_svc;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

This Nginx config file forwards incoming public traffic from port `80` to port `5432`

Link your site to `sites-enabled`, then you can easy switch off site by remove syslink here and re-use again without re-config

```bash
sudo ln -s /etc/nginx/sites-available/kkday-test /etc/nginx/sites-enabled
```

Verify your config files

```bash
sudo nginx -t
```

If successful, reload `Nginx` to pickup the changes

```bash
sudo service nginx reload
```

### Monitoring application

Use `systemd` and create a service file to start and monitor the underlying web app. `systemd` is an init system that provides many powerful features for starting, stopping, and managing processes.

Create service file

```bash
sudo nano /etc/systemd/system/service_name.service
```

and write the content like below

```ini
[Unit]
Description=Example .NET Web API Application running on Ubuntu

[Service]
WorkingDirectory=/path-to-your-app
ExecStart=/usr/bin/dotnet /path-to-your-app/working-file.dll
Restart=always
RestartSec=10  # Restart service after 10 seconds if dotnet service crashes
SyslogIdentifier=dotnet-example
User=www-data
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```

_Note: If the user www-data isn't used by the configuration, the user defined here must be created first and given proper ownership for files._

Save the file and enable the service.

```bash
systemctl enable service_name.service
```

Start the service and verify that it's running.

```bash
systemctl start service_name.service
systemctl status service_name.service
```

Now you can access your app from a browser on local machine via `http://localhost`
