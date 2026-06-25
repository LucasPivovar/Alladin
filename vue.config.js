const { defineConfig } = require('@vue/cli-service')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // Replace the CssMinimizerPlugin instance entirely.
      // The default one fails on Tailwind's escaped-slash classes like .bg-card\/20
      // because cssnano's postcss-selector-parser can't handle them.
      // We keep all non-CSS minimizers (Terser) and add a safe CSS one.
      const nonCssMinimizers = config.optimization.minimizer.filter(
        m => !(m && m.constructor && m.constructor.name === 'CssMinimizerPlugin')
      )
      nonCssMinimizers.push(
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: ['default', {
              minifySelectors: false, // disables postcss-minify-selectors
              mergeRules: false,      // disables postcss-merge-rules
              uniqueSelectors: false, // disables postcss-unique-selectors
            }]
          }
        })
      )
      config.optimization.minimizer = nonCssMinimizers
    }
  }
})
