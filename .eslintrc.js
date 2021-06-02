module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "prettier", "tailwindcss"],
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // suppress errors for missing 'import React' in files
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx", ".js", ".jsx"] }], // allow jsx syntax in js files (for next.js project),
    "react/require-default-props": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": ["error", { custom: "ignore" }],
    "prettier/prettier": ["error", {}, { usePrettierrc: true }], // Includes .prettierrc.js rule
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/no-unescaped-entities": "off",
    "jsx-a11y/accessible-emoji": "off",
    "spaced-comment": ["error", "always", { markers: ["/"] }],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "off",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-custom-classname": "warn",
    "tailwindcss/no-contradicting-classname": "error",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "."],
      },
    },
    tailwindcss: {
      // These are the default values but feel free to customize
      callees: ["classnames", "clsx", "ctl"],
      config: "tailwind.config.js",
      // groups: defaultGroups, // imported from groups.js
      prependCustom: false,
      removeDuplicates: true,
      whitelist: [],
    },
  },
};
