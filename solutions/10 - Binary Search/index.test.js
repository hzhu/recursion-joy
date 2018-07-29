import binarySearch from './'

test('should return -1 if value is not found', () => {
  const list = [1, 2, 4, 15, 28, 99]
  const result = binarySearch(list, 1337, 0, list.length)

  expect(result).toEqual(-1)
})

test('should return the index of the found value', () => {
  const listOne = [1, 3, 4, 6, 22, 68, 109, 590]
  const listTwo = ['apple', 'banana', 'carrot', 'kale', 'spinach']

  const indexOne = binarySearch(listOne, 109, 0, listOne.length - 1)
  const indexTwo = binarySearch(listTwo, 'carrot', 0, listTwo.length - 1)

  expect(indexOne).toEqual(6)
  expect(indexTwo).toEqual(2)
})
