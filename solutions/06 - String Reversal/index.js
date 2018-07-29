function reverseString(str) {
  // base case
  if (str.length < 2) {
    return str
  }

  // recursive case
  const lastChar = str[str.length - 1]
  return lastChar + reverseString(str.slice(0, str.length - 1))
}

export default reverseString