import gcd from './'

test.skip('should compute the greatest common divisor of two numbers', () => {
  expect(gcd(1,2)).toBe(1)
  expect(gcd(5,10)).toBe(5)
  expect(gcd(8,12)).toBe(4)
  expect(gcd(1,5)).toBe(1)
  expect(gcd(10,100)).toBe(10)
  expect(gcd(22,131)).toBe(1)
  expect(gcd(58, 111)).toBe(1)
  expect(gcd(21312,123)).toBe(3)
})
