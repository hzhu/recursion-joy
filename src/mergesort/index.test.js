import { expect } from 'chai'

import { mergesort,
         merge } from './index'



describe('merge', () => {
  it('should merge two sorted sublists into one sorted list', () => {
    const sorted = merge([2, 4, 6], [1, 3, 5], [2, 4, 6, 1, 3, 5])
    expect(sorted).to.deep.equal([1, 2, 3, 4, 5, 6])
  })
})


describe('mergesort', () => {
  it('should sort a single unsorted list', () => {
    const sorted = mergesort([2, 1, 3, -1])
    expect(sorted).to.deep.equal([-1, 1, 2, 3])
  })

  it('should handle repeating elements', () => {
    const sorted = mergesort([2, 1, 3, 3, -1])
    expect(sorted).to.deep.equal([-1, 1, 2, 3, 3])
  })
})
