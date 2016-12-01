const path = require('path')
const webpackConfig = require('../webpack/webpack.test.babel')

module.exports = (config) => {
  config.set({
    frameworks: ['mocha'],
    reporters: ['coverage', 'mocha'],
    browsers: ['Chrome'],

    autoWatch: false,
    singleRun: true,

    files: [
      {
        pattern: './test-bundler.js',
        watched: false,
        served: true,
        included: true
      }
    ],

    preprocessors: {
      ['./test-bundler.js']: ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },

    coverageReporter: {
      dir: path.join(process.cwd(), 'coverage'),
      reporters: [
        { type: 'lcov', subdir: 'lcov' },
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' }
      ]
    }
  })
}
