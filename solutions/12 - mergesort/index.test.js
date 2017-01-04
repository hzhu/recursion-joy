import { expect } from 'chai'

import { merge,
         mergesort, } from './index'



describe('merge', () => {
  it('should merge two sorted sublists into one sorted list', () => {
    const sorted = merge([2, 4, 6], [1, 3, 5], [2, 4, 6, 1, 3, 5])
    expect(sorted).to.deep.equal([1, 2, 3, 4, 5, 6])
  })

  it('should handle emty lists', () => {
    const sorted = merge([], [], [])
    expect(sorted).to.deep.equal([])
  })
})


describe('mergesort', () => {
  it('should sort a single element', () => {
    const sorted = mergesort([1])
    expect(sorted).to.deep.equal([1])
  })

  it('should handle a empty list', () => {
    const sorted = mergesort([])
    expect(sorted).to.deep.equal([])
  })

  it('should sort a list of numbers', () => {
    const sorted = mergesort([2, 1, 3, -1])
    expect(sorted).to.deep.equal([-1, 1, 2, 3])
  })

  it('should handle repeating elements', () => {
    const sorted = mergesort([2, 1, 3, 3, -1])
    expect(sorted).to.deep.equal([-1, 1, 2, 3, 3])
  })

  it('should sort a list of words', () => {
    const sorted = mergesort(['banana', 'apple', 'carrot'])
    expect(sorted).to.deep.equal(['apple', 'banana', 'carrot'])
  })
})
