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

export function mergesort(array) {
  if (array.length < 2) return array

  const mid = Math.floor(array.length * 0.5)

  const l = array.slice(0, mid)
  const r = array.slice(mid, array.length)

  mergesort(l)
  mergesort(r)

  return merge(l, r, array)
}
