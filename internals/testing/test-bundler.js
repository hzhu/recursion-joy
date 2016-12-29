// Include all .js files under `solutions`, except app.js.
// This is for code coverage

const solutions = require.context('../../solutions', true, /^^((?!(main)).)*\.js$/)
const problems = require.context('../../problems', true, /^^((?!(main)).)*\.js$/)

solutions.keys().forEach(solutions)
problems.keys().forEach(problems)
