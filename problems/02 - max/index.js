function max(list) {
  if (list.length === 1) {
    return list[0]
  } else {
    const first = list[0]
    const last = list[list.length - 1]

    if (first > last) {
      list.pop()
    } else {
      list.shift()
    }

    return max(list)
  }
}

export default max
