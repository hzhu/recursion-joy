function sum_array(array) {
  if (array.length === 1) {
    return array[0]
  }

  return array.pop() + sum_array(array)
}

export default sum_array
