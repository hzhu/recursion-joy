const sumArray = arr => {
  if (arr.length === 0) {
    return 0
  }

  return arr.pop() + sumArray(arr)
}

export default sumArray
