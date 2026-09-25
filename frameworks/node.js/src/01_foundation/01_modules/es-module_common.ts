/*
 * ES-Module:
 *           * ES-Module uses import/export for importing and exporting the module.
 *           * It's supports asynchronously module loading, which enables top-level await directly.
 *           * ESM is statically analyzable that helps tools like Vite, Webpack, Rollup to analyze the code.
 *
 * Common:
 *           * Common uses require/export.module for importing and exporting the module.
 *           * It's can import modules dynamically that's why ES-Module is better choice for tooling which enables tree shaking.
 *
 * NOTE: In ES-Module project we can use common-js technique for import by using this file extension ".cjs", but we can also use es-module on common-js project using ".mjs"
 */
