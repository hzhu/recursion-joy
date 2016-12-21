import { expect } from 'chai'
import factorial from './index'


describe('factorial', () => {
  it('should compute the factorial of n', () => {
    expect(factorial(1)).to.equal(1)
    expect(factorial(2)).to.equal(2)
    expect(factorial(3)).to.equal(6)
    expect(factorial(4)).to.equal(24)
    expect(factorial(5)).to.equal(120)
    expect(factorial(6)).to.equal(720)
    expect(factorial(7)).to.equal(5040)
    expect(factorial(8)).to.equal(40320)
    expect(factorial(9)).to.equal(362880)
    expect(factorial(10)).to.equal(3628800)
  })
})
