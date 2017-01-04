function is_palindrome(string) {
  if (string.length === 1) return true
  if (string[0] !== string[string.length - 1]) return false

  return is_palindrome(string.substring(1, string.length - 1))
}

export default is_palindrome