function binary_search(array, start, end, value) {
  if (start > end) return -1

  const mid = Math.floor((start + end) * 0.5)

  if (array[mid] === value) return mid

  if (array[mid] > value) {
    return binary_search(array, start, mid - 1, value)
  } else {
    return binary_search(array, mid + 1, end, value)
  }

  return -1
}

export default binary_search
