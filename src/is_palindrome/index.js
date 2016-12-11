export default function is_palindrome(str) {
  if (str.length < 2) return true

  if (str[0] === str[str.length - 1]) {
    return is_palindrome(str.slice(1, str.length - 1))
  } else {
    return false
  }
}
