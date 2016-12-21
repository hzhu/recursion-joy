function reverse_string(s) {
  if (s.length === 0) {
    return s
  } else {
    return reverse_string(s.slice(1, s.length)) + s[0]
  }
}

export default reverse_string
