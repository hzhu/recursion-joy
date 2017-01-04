import { expect } from 'chai'

import { merge,
         merge_sort } from './index.js'


describe('merge', () => {
  it('should merge to sorted sublists into one sorted list', () => {
    const results = merge([1,3], [2,4], [1,3,2,4])
    expect(results).to.deep.equal([1,2,3,4])
  })
})


describe('merge_sort', () => {
  it('should sort an unordered list', () => {
    const results = merge_sort([2,1,3,4,5,0])
    expect(results).to.deep.equal([0,1,2,3,4,5])
  })
})