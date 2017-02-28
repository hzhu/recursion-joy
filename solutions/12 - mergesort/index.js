export function merge(left, right, array) {
  let l_index = 0
  let r_index = 0
  let a_index = 0

  left.push(Infinity)
  right.push(Infinity)

  for (let i = 0; i < array.length; i++) {
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

  const left = array.slice(0, mid)
  const right = array.slice(mid, array.length)

  mergesort(left)
  mergesort(right)

  return merge(left, right, array)
}
