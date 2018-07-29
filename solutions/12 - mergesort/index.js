export function merge(left, right) {
  const results = []

  while(left.length && right.length) {
    left[0] < right[0]
      ? results.push(left.shift())
      : results.push(right.shift())
  }

  return [...results, ...left, ...right]
}

export function mergeSort(arr) {
  if (arr.length < 2) return arr

  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}