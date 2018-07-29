import max from './'

test('should return the largest number in a list', () => {
  const largest = max([44, 0, 19, 500, -90])
  expect(largest).toBe(500)
})

test('should handle an empty list', () => {
  const largest = max([])
  expect(largest).toEqual([])
})

test('should handle a list with a single element', () => {
  const largest = max([-90])
  expect(largest).toBe(-90)
})
