function factorial(n) {
  // base case
  if (n === 1) {
    return n
  }

  // recursive case
  return n * factorial(n - 1)
}

export default factorial
