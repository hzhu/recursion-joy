import { merge, mergeSort, } from './'

describe('merge', () => {
  test('should merge two sorted arrays into one sorted array', () => {
    const sorted = merge([2, 4, 6], [1, 3, 5])
    expect(sorted).toEqual([1, 2, 3, 4, 5, 6])
  })

  test('should handle an empty array', () => {
    const sorted = merge([], [])
    expect(sorted).toEqual([])
  })
})

describe('mergeSort', () => {
  test('should sort a single element', () => {
    const sorted = mergeSort([1])
    expect(sorted).toEqual([1])
  })

  test('should handle a emptyn array', () => {
    const sorted = mergeSort([])
    expect(sorted).toEqual([])
  })

  test('should sort an array of numbers', () => {
    const sorted = mergeSort([2, 1, 3, -1])
    expect(sorted).toEqual([-1, 1, 2, 3])
  })

  test('should handle repeating elements', () => {
    const sorted = mergeSort([2, 1, 3, 3, -1])
    expect(sorted).toEqual([-1, 1, 2, 3, 3])
  })

  test('should sort an array of words', () => {
    const sorted = mergeSort(['banana', 'apple', 'carrot'])
    expect(sorted).toEqual(['apple', 'banana', 'carrot'])
  })
})
