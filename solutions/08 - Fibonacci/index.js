class Fibonacci {
  constructor() {
    this.cache = {}
  }
  atIndex(n) {
    if (n < 2) return n

    if (!this.cache[n]) {
      this.cache[n] = this.atIndex(n - 1) + this.atIndex(n - 2)
    }

    return this.cache[n]
  }
}

export default Fibonacci
