module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      }
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    plugins: ["react", "react-hooks", "jsx-a11y"],
    rules: {
      // Add your ESLint rules here
    }
  };
  