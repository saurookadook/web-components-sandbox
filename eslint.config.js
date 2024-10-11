const js = require('@eslint/js');
const globals = require('globals');

const _env = {
    es6: true,
    jest: true,
    node: true,
    browser: true,
};

const _extends = [
    'prettier/prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
];

const _globals = {
    expect: 'readonly',
    assert: 'readonly',
    __DEVTOOLS__: 'readonly',
    window: 'writeable',
};

const _plugins = [
    'prettier',
    'jsx-a11y',
];

const _rules = {
    'array-bracket-newline': [1, 'consistent'],
    'array-bracket-spacing': [
        1,
        'never',
        {
            arraysInArrays: true,
            objectsInArrays: false,
        },
    ],
    'array-element-newline': [
        0,
        {
            multiline: true,
            minItems: 2,
        },
    ],
    'arrow-parens': [2, 'always'],
    curly: [1, 'multi-line'],
    'class-methods-use-this': 0,
    'keyword-spacing': [
        2,
        {
            before: true,
            after: true,
            overrides: {
                function: {
                    after: false,
                },
                while: {
                    after: false,
                },
            },
        },
    ],
    'jsx-quotes': [2, 'prefer-double'],
    'max-len': 0,
    'no-case-declarations': 0,
    'no-extraneous-imports': 0,
    'no-inner-declarations': 0,
    'no-prototype-builtins': 0,
    'no-use-before-define': 0,
    'no-undef': 1,
    'no-unused-expressions': 0,
    'no-unused-vars': 1,
    'no-useless-escape': 0,
    'object-curly-spacing': [1, 'always'],
    'operator-linebreak': 0,
    'prettier/prettier': 0,
    semi: [1, 'always'],
    'space-before-function-paren': 0,
    'wrap-iife': [2, 'inside'],
};

module.exports = [
    js.configs.recommended,
    {
        // "root": true,
        files: ['server/**/*.js'],
        ignores: [
            'node_modules',
            'dist',
            'build',
            'coverage',
            'public',
            '.prettierrc.js',
            'eslint.config.js',
        ],
        languageOptions: {
            ecmaVersion: 2020,
            /** @type {"writable" | "readonly" | "off"} */
            globals: {
                // __DEVTOOLS__: _globals.__DEVTOOLS__,
                // window: _globals.window,
                ...globals.browser,
                ...globals['shared-node-browser'],
            },
            // parser: espree.parse() || espree.parseForESLint(),
            /**
             * @description The type of JavaScript source code. Possible values are "script"
             *  for traditional script files, "module" for ECMAScript modules (ESM), and
             *  "commonjs" for CommonJS files. (default: "module" for .js and .mjs files;
             *  "commonjs" for .cjs files)
             */
            sourceType: 'module',
        },
        rules: _rules,
        // settings: _settings
    },
    {
        files: ['.prettierrc.js', 'eslint.config.js'],
        languageOptions: {
            sourceType: 'commonjs',
        },
        rules: {
            ..._rules,
            'no-undef': 0,
        },
    },
];
