function get_permutations(str) {
  if (str.length < 2) {
    return new Set(str)
  }

  const last_char = str.slice(-1)
  const chars_except_last = str.slice(0, -1)

  const sub_perms = get_permutations(chars_except_last)

  const permutations = new Set()

  sub_perms.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      const a = perm.slice(0, i)
      const b = perm.slice(i, perm.length)

      permutations.add(a + last_char + b)
    }
  })

  return permutations
}

export default get_permutations
