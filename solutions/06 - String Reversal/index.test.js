import reverseString from './'

test('should return a reversed string', () => {
  expect(reverseString('lover')).toBe('revol')
  expect(reverseString('a')).toBe('a')
  expect(reverseString('')).toBe('')
})
