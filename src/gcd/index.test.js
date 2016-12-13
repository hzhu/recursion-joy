import { expect } from 'chai'
import gcd from './index'

describe('gcd', () => {
  it('should compute the greatest common divisor of two numbers', () => {
    expect(gcd(5,10)).to.equal(5)
    expect(gcd(8,12)).to.equal(4)
    expect(gcd(1,5)).to.equal(1)
    expect(gcd(10,100)).to.equal(10)
    expect(gcd(22,131)).to.equal(1)
  })
})
