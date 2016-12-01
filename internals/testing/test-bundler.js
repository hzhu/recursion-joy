// Include all .js files under `src`, except app.js.
// This is for code coverage

const context = require.context('../../src', true, /^^((?!(app)).)*\.js$/)

context.keys().forEach(context)
