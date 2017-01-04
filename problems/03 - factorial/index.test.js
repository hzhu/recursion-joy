import { expect } from 'chai'
import factorial from './index.js'

describe('factorial', () => {
  it('should calculate the factorial of n', () => {
    expect(factorial(5)).to.be.equal(120)
  })
})