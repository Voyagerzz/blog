module.exports = {
    env: {
        browser: true,
        node: true,
        jest: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        'plugin:@typescript-eslint/eslint-recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        "ecmaVersion": 6, //ES6语法支持
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true,
            "tsx": true,
        },
        "project": "./tsconfig.json"
    },
    settings: {             //自动发现React的版本，从而进行规范react代码
        "react": {
            "pragma": "React",
            "version": "detect"
        }
    }, 
    rules: {
        'no-console': 'off',
        'no-var': "error",
        'prefer-const': 'error',
        'semi': ['error', 'never'],
        'eqeqeq': ["error", "always"]
    },
    "overrides": [
        {
            // enable the rule specifically for TypeScript files
            "files": ["*.tsx"],
            "rules": {
              "@typescript-eslint/explicit-module-boundary-types": "off"
            }
        }
    ]
}