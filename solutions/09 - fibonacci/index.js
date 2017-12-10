function Fibonacci() {
  this.memo = {}
}


Fibonacci.prototype.at_index = function (n) {
  if (n < 2) return n

  if (!this.memo[n]) {
    this.memo[n] = this.at_index(n - 1) + this.at_index(n - 2)
  }

  return this.memo[n]
}

export default Fibonacci
