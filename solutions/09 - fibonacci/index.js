function Fibonacci() {
  this.memo = {}
}

Fibonacci.prototype = {
  at_index: function (n) {
    if (n === 0) return 0
    if (n === 1 || n === 2) return 1

    if (this.memo[n]) {
      return this.memo[n]
    } else {
      this.memo[n] = this.at_index(n - 2) + this.at_index(n - 1)
      return this.memo[n]
    }
  }
}

export default Fibonacci