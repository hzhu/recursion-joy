function get_elements_by_classname(node, class_name) {
  let results = [];

  (function traverse(node) {
    if (node.className.indexOf(class_name) > -1) {
      results.push(node)
    }

    if (node.children.length > 0) {
      [].forEach.call(node.children, (child) => {
        traverse(child)
      })
    }
  }(node))

  return results
}

export default get_elements_by_classname