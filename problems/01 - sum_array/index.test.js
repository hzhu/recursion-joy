import { expect } from 'chai'
import sum_array from './index.js'

describe('sum_array', () => {
  it('should add all the elements in an array', () => {
    const list = [1,2,3]
    const total = sum_array(list)
    expect(total).to.be.equal(6)
  })
})