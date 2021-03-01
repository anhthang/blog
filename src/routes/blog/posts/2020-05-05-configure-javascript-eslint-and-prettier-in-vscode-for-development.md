---
title: 'Configure JavaScript, ESLint and Prettier in VSCode for development'
tags: [eslint, prettier, javascript]
---

This short guide will provide you a consistent and reuseable development workflow for your new or existing projects, especially in JavaScript. You can increase your code quality and reduce the time spent on debugging. I will show you how to configure VSCode to handle code formatting, linting and type checking now.
<!-- more -->

> Testing is outside the scope, but it's highly recommended. You should check every changed files before commit

_You can skip ahead to the next step if you have any already_

### Getting Started

Open VSCode and install following extensions (what I shared in previous post, it's [here](https://anhthang.org/2020/04/24/vscode-extensions-for-developers))

-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

-   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### ESLint and Prettier Setup

Install following npm packages for your project as dev dependencies. I use `yarn` here, you can use `npm i --save-dev` instead

```bash
yarn add --dev eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier husky lint-staged prettier
```

-   added **eslint**, **prettier**
-   added **eslint-config-prettier** so **eslint** and **prettier** won’t fight over code formatting rules
-   added **eslint-config-airbnb-base** to use Airbnb's base JS .eslintrc as an extensible shared config. You can use other base like: StandardJS
-   Prettier will auto-format your code based on it’s rules. **It's amazingggg!** 🤩 _Let's install and enjoy your life._

Open the `.eslintrc.json` file and configure it like so:

```json
{
    "extends": ["airbnb-base", "prettier"],
    "plugins": ["import", "prettier"],
    "rules": {
        "eqeqeq": ["warn"],
        "radix": ["warn"],
        "newline-per-chained-call": ["warn"],
        "newline-before-return": "error",
        "no-restricted-syntax": ["warn"],
        "no-param-reassign": ["error", { "props": false }],
        "import/no-dynamic-require": ["warn"],
        "prettier/prettier": [
            "error",
            {
                "singleQuote": true,
                "semi": false,
                "tabWidth": 4
            }
        ]
    }
}
```

You can create a file name **.prettierrc** and write it own rules

```json
{
    "singleQuote": true,
    "semi": false,
    "tabWidth": 4
}
```

_This section is my preferences. You're free to add your own rules._

### Lint your Code

Add the following to `package.json` file

```json
"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
}
```

Husky can prevent bad `git commit`, `git push` and more 🐶 `woof`!

```json
"lint-staged": {
    "*.js": [
        "eslint --fix",
        "git add"
    ]
}
```

Run linters against staged git files and don't let 💩 slip into your code base!

```json
"scripts": {
    "start": "node src/app/app.js",
    "lint": "eslint src --ext .js,.tsx,.ts --fix"
}
```

With this lint script, you can run from the terminal (`yarn lint` or `npm run lint`) and enjoy fixing linter errors!

You can find more details about **eslint** options [here](https://eslint.org/docs/user-guide/command-line-interface)

### Prettier Formatter

Now I want VSCode to format my code following ESLint, Prettier config whenever I saving a file

Go to VSCode Preferences then add the following settings:

-   Set Prettier is default formatter and config for all JavaScript projects

```json
{
    "prettier.semi": false,
    "prettier.singleQuote": true,
    "prettier.tabWidth": 4,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```

-   Let VSCode always fix after saving a file

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

### Example

Before

![before](https://raw.githubusercontent.com/anhthang/org/master/img/prettier-before.png)

After

![after](https://raw.githubusercontent.com/anhthang/org/master/img/prettier-after.png)

🥳 **Watch the magic of Prettier**

_Happy Coding~_
