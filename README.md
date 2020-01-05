# Adopt Me! React App

Adopt Me! React App following **Complete Intro to React!**, FrontendMasters course.

---

# Configurations

### **Eslint**

> `npm install -D eslint eslint-config-prettier`

> `npm i -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`

> `npm i -D eslint-plugin-react-hooks`

#### filename: `.eslintrc.json`

```
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  "rules": {
    "react/prop-types": 0,
    "no-console": 1,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1
  },
  "plugins": ["react", "import", "jsx-a11y", "react-hooks"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

### **Babel**

> `npm install -D babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react`

#### filename: `.babelrc`

```
{
  "presets": ["@babel/preset-react", "@babel/preset-env"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

#### file: `.eslintrc.json`

add following line:

```
  "parser": "babel-eslint",
```
