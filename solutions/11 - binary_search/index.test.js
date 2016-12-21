import { expect } from 'chai'
import binary_search from './index'


describe('binary_search', () => {
  const list = [1, 2, 4, 15, 28, 99]

  it('should return the index of the found value', () => {
    let index = binary_search(list, 0, list.length - 1, 15)
    expect(index).to.equal(3)
  })

  it('should return -1 if value is not found', () => {
    let index = binary_search(list, 0, list.length - 1, 1337)
    expect(index).to.equal(-1)
  })
})
