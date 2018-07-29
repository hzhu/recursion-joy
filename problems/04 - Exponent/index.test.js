import exponent from './'

test('should compute an exponent', () => {
  expect(exponent(2,4)).toBe(16)
})

test('should handle negative powers', () => {
  expect(exponent(2,-2)).toBe(0.25)
})
