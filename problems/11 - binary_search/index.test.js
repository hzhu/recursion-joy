import { expect } from 'chai'
import binary_search from './index.js'

describe('binary_search', () => {
  it('should find and return the index of a given value', () => {
    const list_one = [1,3,4,6,22,68,109,590]
    const list_two = [1,3,4,6,22,68,109,590]
    const list_three = ['apple', 'banana', 'carrot']

    const result_one = binary_search(list_one, 0, list_one.length - 1, 111)
    const result_two = binary_search(list_two, 0, list_two.length - 1, 109)
    const result_three = binary_search(list_three, 0, list_three.length - 1, 'carrot')

    expect(result_one).to.be.equal(-1)
    expect(result_two).to.be.equal(6)
    expect(result_three).to.be.equal(2)
  })
})