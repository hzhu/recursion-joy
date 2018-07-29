function getElementsByClassName(className, node) {
  const results = []

  function traverse(node) {
    if (node.classList.contains(className)) {
      results.push(node)
    }

    if (node.children.length === 0) {
      return
    }

    [...node.children].forEach(child => traverse(child))
  }

  traverse(node)

  return results
}

export default getElementsByClassName
