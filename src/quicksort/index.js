export function swap(array, a, b) {
  const temp = array[a]
  array[a] = array[b]
  array[b] = temp
}

export function partition(array, start, end) {
  let pivot = array[end]
  let p_index = start

  for (let i = start; i < end; i++) {
    if (array[i] <= pivot) {
      swap(array, p_index, i)
      p_index++
    }
  }

  swap(array, p_index, end)
  return p_index
}

export function quicksort(array, start, end) {
  if (start < end) {
    let p_index = partition(array, start, end)
    quicksort(array, start, p_index - 1)
    quicksort(array, p_index + 1, end)
  }

  return array
}
