import { expect } from 'chai'
import exponent from './index.js'

describe('exponent', () => {
  it('should calculate the power of a base number', () => {
    var result = exponent(2,4)
    expect(result).to.be.equal(16)
  })
})