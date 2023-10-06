# Continous Integration Pipeline Demo

## Code quality and formatters

### Prettier

Prettier is an opinionated code formatter. It supports many languages and integrates with most editors. Prettier formats code on save

Install

```bash
npm install --save-dev --save-exact prettier
```

Format files

```bash
npx prettier . --write
```

#### Editor setup

Formatting from the command line is a good way to get started, but you get the most from Prettier by running it from your editor, either via a keyboard shortcut or automatically whenever you save a file.

`prettier-vscode` can be installed using the extension sidebar – it’s called “Prettier - Code formatter.”

Be sure that `format on save` setting is enabled in your editor.

### ESLint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

You can install and configure ESLint using this command:

```bash
npm init @eslint/config
```

### Integrating Prettier & ESLint

Linters usually contain not only code quality rules, but also stylistic rules. This is the reason why linters might conflict with Prettier. Use Prettier for code formatting concerns, and linters for code-quality concerns.

It’s easy to work with both together, by using `eslint-config-prettier`, a pre-made configuration that turns off ESLint all rules that are unnecessary or might conflict with Prettier.

## Branch protection rules

xxx

## lintstaged

## huskey

## GitHub actions

## Source

- Prettier: https://prettier.io/
- prettier-vscode: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- eslint-config-prettier: https://github.com/prettier/eslint-config-prettier
