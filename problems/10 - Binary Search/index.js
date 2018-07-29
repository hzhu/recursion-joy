function binarySearch(list, target) {
  const start = 0
  const end = list.length

  function BS(list, target, start, end) {
    const midIndex = Math.floor(start + end / 2)

    if (list[midIndex] === target) return midIndex

    if (target < list[midIndex]) {
      return BS(list, target, start, mid)
    }

    if (target > list[midIndex]) {
      return BS(list, target, mid, start)
    }

    return -1
  }

  return BS(list, target, start, end)
}