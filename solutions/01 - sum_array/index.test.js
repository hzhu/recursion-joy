import { expect } from 'chai'
import sum_array from './index'

describe('sum_array', () => {
  it('should sum an array of integers', () => {
    const six = sum_array([1,2,3])
    expect(six).to.equal(6)
  })
})
