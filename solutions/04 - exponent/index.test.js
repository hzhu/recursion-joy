import { expect } from 'chai'
import exponent from './index'


describe('exponent', () => {
  it('should compute an exponent', () => {
    expect(exponent(2,4)).to.equal(16)
  })

  it('should handle negative powers', () => {
    expect(exponent(2,-2)).to.equal(0.25)
  })
})
