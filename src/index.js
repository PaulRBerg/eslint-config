module.exports = {
  extends: ["prettier"],
  rules: {
    "arrow-body-style": "off",
    "comma-dangle": ["error", "always-multiline"],
    "curly": ["error", "all"],
    "func-names": ["error", "as-needed"],
    "import/no-dynamic-require": "off",
    "import/no-extraneous-dependencies": "off",
    /* Can't use both prettier and eslint's indent: https://github.com/eslint/eslint/issues/10930 */
    indent: "off",
    "linebreak-style": "off",
    "max-len": [
      "warn",
      120,
      {
        ignoreComments: true,
      },
      {
        ignoreTrailingComments: true,
      },
    ],
    "no-console": "off",
    "no-trailing-spaces": [
      "error",
      {
        ignoreComments: true,
      },
    ],
    "no-underscore-dangle": [
      "error",
      {
        allow: ["_id", "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"],
        allowAfterThis: true,
      },
    ],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "_",
        varsIgnorePattern: "_",
      },
    ],
    "prefer-template": "off",
    quotes: ["error", "double", { avoidEscape: true }],
    strict: "off",
  },
};
