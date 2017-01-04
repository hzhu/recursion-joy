function reverse_string(str) {
  if (str.length === 1) return str

  const last = str.length - 1
  const substring = str.slice(0, last)

  return str[last] + reverse_string(substring)
}

export default reverse_string
