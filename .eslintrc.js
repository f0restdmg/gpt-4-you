const { resolve } = require('node:path');
const { JAVASCRIPT_FILES } = require('@vercel/style-guide/eslint/constants');

const project = resolve(__dirname, 'tsconfig.json');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  parserOptions: { project },
  settings: {
    'import/resolver': { typescript: { project } },
    /**
     * enable MUI Joy components to be checked
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#configurations}
     */
    'jsx-a11y': {
      polymorphicPropName: 'component',
      components: {
        Button: 'button',
        Icon: 'svg',
        IconButton: 'button',
        Image: 'img',
        Input: 'input',
        Link: 'a',
        List: 'ul',
        ListDivider: 'li',
        ListItem: 'li',
        ListItemButton: 'button',
        NextImage: 'img',
        NextLink: 'a',
        Textarea: 'textarea',
      },
    },
  },
  rules: {
    'no-unused-vars': 0,
    'react/button-has-type': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        disallowTypeAnnotations: false,
      },
    ],
    'eslint-comments/require-description': 'off',
    "import/prefer-default-export": "off",
    "import/no-default-export": "warn",
    "import/no-cycle": "off",
    "import/export": "warn",
    "import/no-extraneous-dependencies": "warn",
    "import/no-duplicates": "error",
    "import/newline-after-import": "error",
    "import/no-internal-modules": [
      "error",
      {
        forbid: [
          "@rshbintech.dboul/**/dist/*",
          "@rshbintech.dboul/**/dist/**/*",
        ],
      },
    ],
    'import/no-unresolved': 'off',
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "type",
          "object",
        ],
        pathGroups: [
          {
            pattern: "./**.scss",
            group: "object",
          },
        ],
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/anchor-is-valid": "off",
    'react/display-name': 'off',
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/default-param-last": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-use-before-define": [
      "warn",
      { functions: false, classes: true, variables: true },
    ],
    "@typescript-eslint/padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: [
          "const",
          "let",
          "var",
          "case",
          "default",
          "multiline-block-like",
        ],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: ["multiline-const"],
        next: "*",
      },
    ],
  },
};