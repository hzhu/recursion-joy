import { expect } from 'chai'
import sum_array from './index'

describe('sum_array', () => {
  it('should sum an array of integers', () => {
    const one = sum_array([1])
    expect(one).to.equal(1)

    const two = sum_array([1,2,-1])
    expect(two).to.equal(2)

    const six = sum_array([1,2,3])
    expect(six).to.equal(6)
  })
})
