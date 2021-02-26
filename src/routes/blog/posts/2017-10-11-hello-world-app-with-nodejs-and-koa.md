---
layout: post
title: 'Hello World! app with Node.js and Koa'
comments: false
categories: [hello world, koa, nodejs]
---

Install Node.js for your platform

Open terminal and type

```sh
mkdir hello-world; cd hello-world
```

Initialize your project and link to npm

Running this command initializes your project:

```sh
npm init
```

This creates a `package.json` file in your `hello-world` app folder and will prompt you to enter number of things. You can enter your way through all of them EXCEPT this one:

```sh
entry point: (index.js)
```

You will want to change this to

```
<your_file_name>.js
```

Install Koa in the `hello-world` directory

```sh
npm i koa koa-router
```

`--save` is default option in node v8

Start your text editor and create a file named as entry point

```js
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', (ctx) => {
    ctx.status = 200
    ctx.body = 'Hello, World'
})

app.use(router.routes())

app.listen(3000, () => {
    console.log('app listening on port 3000')
})
```

Run the app

```
node <your_file_name>.js
```

#### Cheers!
