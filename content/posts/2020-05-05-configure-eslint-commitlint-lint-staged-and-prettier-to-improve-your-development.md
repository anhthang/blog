---
title: 'Configure ESLint, commitlint, lint-staged and Prettier to improve your development'
published: '2020-05-05'
tags: [eslint, prettier, javascript, commitlint, husky]
---

This short guide will provide you a consistent and reusable development workflow for your new or existing projects, especially in JavaScript. You can increase your code quality and reduce the time spent on debugging. I will show you how to configure VSCode to handle code formatting, linting and type checking now.

> Testing is outside the scope, but it's highly recommended. You should check every changed files before commit

_You can skip ahead to the next step if you have any already_

### Benefits

- ESLint **performs automated scans of your JavaScript files for common syntax and style errors**. Prettier scans your files for style issues and automatically reformats your code to ensure consistent rules are being followed for indentation, spacing, semicolons, single quotes vs double quotes, etc.
- [Why Use Conventional Commits?](https://www.conventionalcommits.org/en/v1.0.0/#why-use-conventional-commits)
- Linting makes more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style. But running a lint process on a whole project is slow, and linting results can be irrelevant. Ultimately you only want to lint files that will be committed.

### Getting Started

Open VSCode and install following extensions (what I shared in previous post, it's [here](https://anhthang.org/posts/2020-04-24-vscode-extensions-for-developers))

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### ESLint and Prettier Setup

Install following npm packages for your project as dev dependencies. I use `yarn` here, you can use `npm i --save-dev` instead

```bash
yarn add --dev @commitlint/{config-conventional,cli} eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier husky lint-staged prettier
```

- Added **eslint**, **prettier**
- Added **eslint-config-prettier** so **eslint** and **prettier** won't fight over code formatting rules
- Added **eslint-config-airbnb-base** to use Airbnb's base JS .eslintrc as an extensible shared config. You can use other base like: StandardJS
- Prettier will auto-format your code based on it's rules. **It's amazingggg!** 🤩 _Let's install and enjoy your life._

Set up Eslint configuration file, and the easiest way to do that is:

```bash
$ npm init @eslint/config
# or
$ yarn create @eslint/config
```

```bash
❯ npm init @eslint/config
Need to install the following packages:
  @eslint/create-config
Ok to proceed? (y) y
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · commonjs
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-airbnb-base@latest
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.2
✔ Would you like to install them now with npm? · No / Yes
Installing eslint-config-airbnb-base@latest, eslint@^7.32.0 || ^8.2.0, eslint-plugin-import@^2.25.2

removed 38 packages, changed 1 package, and audited 792 packages in 3s

101 packages are looking for funding
  run `npm fund` for details

4 high severity vulnerabilities

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
Successfully created .eslintrc.json file in /path-to-your-project
```

Or write the configuration below into the `.eslintrc.json` file if you want to follow my config:

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

You can find more details about **eslint** options [here](https://eslint.org/docs/user-guide/command-line-interface)

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

Run linters against staged git files and don't let 💩 slip into your code base!

To create hook, .husky directory have to exist. If not, try to install

```bash
❯ npx husky install
husky - Git hooks installed
```

Add hook

```bash
❯ npx husky add .husky/pre-commit "npx lint-staged"
husky - created .husky/pre-commit
```

### Lint your commit message

```bash
# Install commitlint cli and conventional config
npm install --save-dev @commitlint/{config-conventional,cli}
# For Windows:
npm install --save-dev @commitlint/config-conventional @commitlint/cli

# Configure commitlint to use conventional config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

To lint commits before they are created you can use Husky's commit-msg hook:

```bash
❯ npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
husky - created .husky/commit-msg
```

Sometimes above command doesn't work in some command interpreters
You can try other commands below to write `npx --no -- commitlint --edit $1`
in the commit-msg file.

```bash
npx husky add .husky/commit-msg \"npx --no -- commitlint --edit '$1'\"
# or
npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"

# or
yarn husky add .husky/commit-msg 'yarn commitlint --edit $1'
```

### Prettier Formatter

Now I want VSCode to format my code following ESLint, Prettier config whenever I saving a file

Go to VSCode Preferences then add the following settings:

- Set Prettier is default formatter and config for all JavaScript projects

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

- Let VSCode always fix after saving a file

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
