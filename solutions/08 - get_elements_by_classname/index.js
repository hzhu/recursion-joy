function get_elements_by_classname(node, value) {
  let results = [];
  (function traverse(node) {
    // base case
    if (node.className.indexOf(value) > -1) {
      results.push(node)
    }

    if (node.children.length === 0) {
      return
    } else {
      Array.prototype.forEach.call(node.children, (child) => {
        traverse(child)
      })
    }

  })(node)

  return results
}

export default get_elements_by_classname
