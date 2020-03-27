module.exports = {
  parser: "@typescript-eslint/parser", 
  extends: [
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true 
    }
  },
  rules: {
  },
  settings: {
    react: {
      version: "detect" 
    }
  }
};