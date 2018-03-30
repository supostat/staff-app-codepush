module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "react-native"
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "extends" : [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb-base"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "arrow-body-style" : "warn"
  }
};
