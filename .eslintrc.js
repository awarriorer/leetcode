module.exports = {
    // 以当前目录为根目录，不再向上查找 .eslintrc.js
    root: true,
    // 运行环境
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: "eslint:recommended",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: [
        'babel',
        'es',
        'import',
        'filenames',
    ],
    rules: {
        quotes: ["error", "single"]
    }
};