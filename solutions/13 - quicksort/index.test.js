import { expect } from 'chai'

import { swap,
         partition,
         quicksort } from './index'



describe('swap', () => {
  it('should swap two elements in an array', () => {
    const list = [4, 2, 1, 0]
    swap(list, 0, 3)

    expect(list).to.deep.equal([0, 2, 1, 4])
  })
})


describe('partition', () => {
  it('should partition an array and return the pivot index', () => {
    const list = [4, 2, 1, 0, 5, 3]
    const p_index = partition(list, 0, list.length - 1)

    expect(list).to.deep.equal([2, 1, 0, 3, 5, 4])
    expect(p_index).to.equal(3)
  })

  it('should handle a list with a single element', () => {
    const list = [1]
    const p_index = partition(list, 0, list.length - 1)

    expect(list).to.deep.equal([1])
    expect(p_index).to.equal(0)
  })
})


describe('quicksort', () => {
  it('should sort an list of a single element', () => {
    const list = [1]
    quicksort(list, 0, list.length - 1)
    expect(list).to.deep.equal([1])
  })

  it('should sort an list of numbers', () => {
    const list = [2, 1, -3]
    quicksort(list, 0, list.length - 1)
    expect(list).to.deep.equal([-3, 1, 2])
  })

  it('should sort an list of repeating & duplicate elements', () => {
    const list = [0, 10, 4, 2, 8, 1, 3, 3, 0, 6]
    quicksort(list, 0, list.length - 1)
    expect(list).to.deep.equal([0, 0, 1, 2, 3, 3, 4, 6, 8, 10])
  })

  it('should sort an list of words', () => {
    const list = ['banana', 'apple', 'carrot']
    quicksort(list, 0, list.length - 1)
    expect(list).to.deep.equal(['apple', 'banana', 'carrot'])
  })
})
