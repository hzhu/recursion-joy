function sum_array(list) {
  if (list.length === 1) {
    return list[0]
  } else {
    list[0] = list[0] + list[list.length - 1]
    list.pop()
    return sum_array(list)
  }

}

export default sum_array