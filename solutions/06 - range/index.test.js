import { expect } from 'chai'
import range from './index'


describe('range', () => {
  it('should return an array with a range from start value to end value', () => {
    expect(range(5, 10)).to.deep.equal([5,6,7,8,9])
    expect(range(-1, 5)).to.deep.equal([-1,0,1,2,3,4])
    expect(range(0, 5)).to.deep.equal([0,1,2,3,4])
  })

  it('should work with a single argument', () => {
    expect(range(5)).to.deep.equal([0,1,2,3,4])
  })

  it('should return [0] if only a start value of 0 is provided', () => {
    expect(range(0)).to.deep.equal([0])
  })

  it('should return an empty array for invalid range', () => {
    expect(range(1, -5)).to.deep.equal([])
  })
})
