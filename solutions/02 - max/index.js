function max(list) {
  if (list.length === 1) return list[0]
  if (list.length === 0) return list

  const first = list[0]
  const last = list[list.length - 1]

  if (first > last) {
    list.pop()
  } else {
    list.shift()
  }

  return max(list)
}

export default max
