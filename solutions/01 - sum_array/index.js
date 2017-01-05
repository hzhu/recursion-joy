function sum_array(array) {
  if (array.length === 0) {
    return 0
  }

  return array.pop() + sum_array(array)
}

export default sum_array
