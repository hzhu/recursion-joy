import { expect } from 'chai'

import { partition,
         quick_sort
       } from './index.js'


describe('partition', () => {
  it('should take a pivot element and sort it, returning the pivots index', () => {
    const l = [2,1,0,4,3]
    const results = partition(l, 0, l.length - 1)

    expect(results).to.equal(3)
    expect(l).to.deep.equal([2,1,0,3,4])
  })

  it('should partition an array and return the pivots index', () => {
    const list = [4, 2, 1, 0, 5, 3]
    const p_index = partition(list, 0, list.length - 1)

    expect(list).to.deep.equal([2, 1, 0, 3, 5, 4])
    expect(p_index).to.equal(3)
  })
})


describe('quick_sort', () => {
  it('should sort a list of integers', () => {
    const l = [2,1,0,4,3]
    const results = quick_sort(l, 0, l.length - 1)

    expect(results).to.deep.equal([0,1,2,3,4])
  })
})


