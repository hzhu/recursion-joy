import { expect } from 'chai'
import gcd from './index.js'

describe('gcd', () => {
  it('should calculate the GCD of two positive integers', () => {
    expect(gcd(58, 111)).to.be.equal(1)
    expect(gcd(8, 12)).to.be.equal(4)
    expect(gcd(1,2)).to.be.equal(1)
    expect(gcd(21312,123)).to.be.equal(3)
  })
})