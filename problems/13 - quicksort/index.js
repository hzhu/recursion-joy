export function partition(list, start, end) {
  let pivot = list[end]
  let p_index = start

  for (var i = start; i < end; i++) {
    if (list[i] <= pivot) {
      let temp = list[i]
      list[i] = list[p_index]
      list[p_index] = temp
      p_index++
    }
  }

  let temp = list[p_index]
  list[p_index] = pivot
  list[end] = temp

  return p_index
}

export function quick_sort(array, start, end) {
  if (start < end) {
    var p_index = partition(array, start, end)
    quick_sort(array, start, p_index - 1)
    quick_sort(array, p_index + 1, end)
  }
  return array
}
