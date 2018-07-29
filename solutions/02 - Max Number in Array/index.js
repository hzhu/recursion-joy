const max = list => {
  const first = list[0]
  const last = list[list.length - 1]

  if (list.length === 0) return []
  if (list.length === 1)  return list[0]

  first > last
    ? list.pop()
    : list.shift()

  return max(list)
}

export default max