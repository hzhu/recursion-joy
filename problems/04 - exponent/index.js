function exponent(base, power) {
  if (power === 1) return base
  if (power === 0) return 1

  return base * exponent(base, power - 1)
}

export default exponent
