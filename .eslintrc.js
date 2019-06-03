module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: "babel-eslint",
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-indent": ["error", 2],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    curly: [2, "multi-line"],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-shadow": "warn",
    "import/no-named-as-default": ['off'],
    "react/no-array-index-key":['off']
  },
};
