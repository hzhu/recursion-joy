function gcd(a, b) {
  if (b < a) {
    let temp = a
    a = b
    b = temp
  }

  let r = b % a

  if (r === 0) {
    return a
  } else {
    return gcd(r, a)
  }
}

export default gcd
