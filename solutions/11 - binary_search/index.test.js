import { expect } from 'chai'
import binary_search from './index'


describe('binary_search', () => {
  it('should return -1 if value is not found', () => {
    const list = [1, 2, 4, 15, 28, 99]
    const index = binary_search(list, 0, list.length - 1, 1337)

    expect(index).to.equal(-1)
  })

  it('should return the index of the found value', () => {
    const list_one = [1,3,4,6,22,68,109,590]
    const list_two = ['apple', 'banana', 'carrot']

    const index_one = binary_search(list_one, 0, list_one.length - 1, 109)
    const index_two = binary_search(list_two, 0, list_two.length - 1, 'carrot')

    expect(index_one).to.be.equal(6)
    expect(index_two).to.be.equal(2)
  })
})
