import { expect } from 'chai'
import factorial from './index'


describe('factorial', () => {
  it('should compute the factorial of n', () => {
    expect(factorial(5)).to.equal(120)
  })
})
