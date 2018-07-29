import Fibonacci from './'

test('should be a constructor', () => {
  const fib = new Fibonacci()
  expect(fib).toBeInstanceOf(Fibonacci)
})

test('should have an at_index method', () => {
  const fib = new Fibonacci()
  expect(fib.atIndex).toBeDefined()
})

test('should compute the fibonacci number at index n', () => {
  const fib = new Fibonacci()
  const answer = fib.atIndex(10)
  expect(answer).toBe(55)
})

test('should cover base cases', () => {
  const fib = new Fibonacci()

  expect(fib.atIndex(0)).toBe(0)
  expect(fib.atIndex(1)).toBe(1)
  expect(fib.atIndex(2)).toBe(1)
})

test('should cache computed results', () => {
  const fib = new Fibonacci()
  fib.atIndex(10)
  expect(fib.cache[5]).toBe(5)
})
