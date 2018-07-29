import isPalindrome from './'

test('should return true for palindrome string', () => {
  expect(isPalindrome('racecar')).toBe(true)
})

test('should return false for non-palindrome string', () => {
  expect(isPalindrome('foo')).toBe(false)
  expect(isPalindrome('朱学进')).toBe(false)
})

test('should handle string with length 0', () => {
  expect(isPalindrome('')).toBe(true)
})

test('should handle empty strings', () => {
  expect(isPalindrome(' ')).toBe(true)
  expect(isPalindrome('  ')).toBe(true)
})
