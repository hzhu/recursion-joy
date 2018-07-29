import { swap,
         partition,
         quicksort } from './'



describe('swap', () => {
  test('should swap two elements in an array', () => {
    const list = [4, 2, 1, 0]
    swap(list, 0, 3)

    expect(list).toEqual([0, 2, 1, 4])
  })
})


describe('partition', () => {
  test('should partition an array and return the pivot index', () => {
    const list = [4, 2, 1, 0, 5, 3]
    const p_index = partition(list, 0, list.length - 1)

    expect(list).toEqual([2, 1, 0, 3, 5, 4])
    expect(p_index).toEqual(3)
  })

  test('should handle a list with a single element', () => {
    const list = [1]
    const p_index = partition(list, 0, list.length - 1)

    expect(list).toEqual([1])
    expect(p_index).toEqual(0)
  })
})


describe('quicksort', () => {
  test('should sort an list of a single element', () => {
    const list = [1]
    quicksort(list, 0, list.length - 1)
    expect(list).toEqual([1])
  })

  test('should sort an list of numbers', () => {
    const list = [2, 1, -3]
    quicksort(list, 0, list.length - 1)
    expect(list).toEqual([-3, 1, 2])
  })

  test('should sort an list of repeating & duplicate elements', () => {
    const list = [0, 10, 4, 2, 8, 1, 3, 3, 0, 6]
    quicksort(list, 0, list.length - 1)
    expect(list).toEqual([0, 0, 1, 2, 3, 3, 4, 6, 8, 10])
  })

  test('should sort an list of words', () => {
    const list = ['banana', 'apple', 'carrot']
    quicksort(list, 0, list.length - 1)
    expect(list).toEqual(['apple', 'banana', 'carrot'])
  })
})
