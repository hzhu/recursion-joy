function binary_search(list, start, end, value) {
  if (start > end) return -1

  const mid = Math.floor((start + end) * 0.5)

  if (list[mid] === value) return mid

  if (list[mid] > value) {
    return binary_search(list, start, mid - 1, value)
  } else {
    return binary_search(list, mid + 1, end, value)
  }
}

export default binary_search