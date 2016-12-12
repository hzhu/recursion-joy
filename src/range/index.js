function range(start, end) {
  if (start === 0 && end === undefined) return [0]

  if (start > 0 && end === undefined) {
    end = start
    start = 0
  }

  if (start > end) return []

  // base case
  if (start[start.length - 1] === (end - 1)) {
    return start
  }

  if (Array.isArray(start)) {
    const next_value = start[start.length - 1] + 1
    start.push(next_value)

    return range(start, end)
  } else {
    return range([start], end)
  }
}

export default range
