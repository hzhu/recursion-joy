// Include all .js files under `src`, except app.js.
// This is for code coverage

const context = require.context('../../src', true, /^^((?!(main)).)*\.js$/)

context.keys().forEach(context)
