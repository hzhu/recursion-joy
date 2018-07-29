  function binarySearch(list, target, start, end) {
    if (start > end) return -1

    const mid = Math.floor((start + end) * 0.5)

    if (list[mid] === target) return mid

    if (list[mid] > target) {
      return binarySearch(list, target, start, mid,)
    } else {
      return binarySearch(list, target, mid + 1, end)
    }
  }

export default binarySearch
