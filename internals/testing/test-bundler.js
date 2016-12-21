// Include all .js files under `solutions`, except app.js.
// This is for code coverage

const context = require.context('../../solutions', true, /^^((?!(main)).)*\.js$/)

context.keys().forEach(context)
