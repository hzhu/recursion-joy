export function merge(left, right, array) {
  let l_index = 0
  let r_index = 0
  let a_index = 0

  left.push(Infinity)
  right.push(Infinity)

  while (a_index < array.length) {
    if (left[l_index] < right[r_index]) {
      array[a_index] = left[l_index]
      l_index++
    } else {
      array[a_index] = right[r_index]
      r_index++
    }
    a_index++
  }

  return array
}

export function merge_sort(list) {
  if (list.length === 1) return list

  const mid = Math.floor(list.length * 0.5)

  const left = list.slice(0, mid)
  const right = list.slice(mid, list.length)

  merge_sort(left)
  merge_sort(right)

  return merge(left, right, list)
}

