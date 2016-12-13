function gcd(x, y) {
  if (x > y) {
    // x = y * q + r
    let q = Math.floor(x/y) // 1
    let r = x - (y * q)
    x = y * q + r

    if (r === 0) {
      return y
    } else {
      return gcd(r, y)
    }
  } else {
    let q = Math.floor(y/x) // 1
    let r = y - (x * q)
    y = x * q + r

    if (r === 0) {
      return x
    } else {
      return gcd(r, x)
    }
  }
}

export default gcd
