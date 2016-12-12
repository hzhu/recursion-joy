function max(list) {
  if (list.length < 2) return list[0]

  if (list[0] > list[1]) {
    list.splice(1,2)
    return max(list)
  } else {
    list.splice(0,1)
    return max(list)
  }
}

export default max
