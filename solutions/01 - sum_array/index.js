export default function sum_array (array) {
  if (array.length === 1) {
    return 1
  }

  return array.pop() + sum_array(array)
}
