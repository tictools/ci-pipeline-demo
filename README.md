# Continous Integration Pipeline Demo

## Code quality and formatters

### Prettier

Prettier is an opinionated code formatter. It supports many languages and integrates with most editors. Prettier formats code on save

Install

```bash
### npm
npm install --save-dev --save-exact prettier

### bun
bun install --save-dev --save-exact prettier
```

Format files

```bash
### npm
npx prettier . --write

### bun
bunx prettier . --write
```

#### Editor setup

Formatting from the command line is a good way to get started, but you get the most from Prettier by running it from your editor, either via a keyboard shortcut or automatically whenever you save a file.

`prettier-vscode` can be installed using the extension sidebar – it’s called “Prettier - Code formatter.”

Be sure that `format on save` setting is enabled in your editor.

### ESLint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

You can install and configure ESLint using this command:

```bash
### npm
npm init @eslint/config

### bun
bun init @eslint/config
```

### Integrating Prettier & ESLint

Linters usually contain not only code quality rules, but also stylistic rules. This is the reason why linters might conflict with Prettier. Use Prettier for code formatting concerns, and linters for code-quality concerns.

It’s easy to work with both together, by using `eslint-config-prettier`, a pre-made configuration that turns off ESLint all rules that are unnecessary or might conflict with Prettier.

## Branch protection rules

You can create a branch protection rule to enforce certain workflows for one or more branches, such as requiring an approving review or passing status checks for all pull requests merged into the protected branch.

You can create a branch protection rule in a repository for a specific branch, all branches, or any branch that matches a name pattern you specify with fnmatch syntax. For example, to protect any branches containing the word release, you can create a branch rule for _release_.

This is a test

## lint-staged

`lint-staged` runs linters against staged git files. Linting makes more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style.

But running a lint process on a whole project is slow, and linting results can be irrelevant. Ultimately you only want to lint files that will be committed.

## Husky

Husky improves your commits and more 🐶 woof!

You can use it to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports all client-side Git hooks.

## Integrating lint-staged and Husky

Install

```bash
### npm
npx mrm@2 lint-staged

### bun
bunx mrm@2 lint-staged
```

This will:

- install husky and lint-staged,
- add `lint-staged` configuration to the project’s `package.json` that will automatically format supported files in a pre-commit hook.
- add `.husky` folder with `pre-commit` hook.

## GitHub actions

## Source

- Prettier: https://prettier.io/
- prettier-vscode: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- eslint-config-prettier: https://github.com/prettier/eslint-config-prettier
- lint-staged: https://github.com/okonet/lint-staged
- Husky: https://github.com/typicode/husky
- branch protection rule: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule
