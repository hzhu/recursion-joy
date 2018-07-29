import sumArray from './'

test('should sum an array of integers', () => {
  const one = sumArray([1])
  expect(one).toBe(1)

  const two = sumArray([1,2,-1])
  expect(two).toBe(2)

  const six = sumArray([1,2,3])
  expect(six).toBe(6)
})

test('should handle empty lists', () => {
  const empty = sumArray([])
  expect(empty).toEqual(0)
})


