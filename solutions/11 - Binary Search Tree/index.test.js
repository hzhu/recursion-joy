import Node from './'

test('Node is a constructor', () => {
  expect(typeof Node.prototype.constructor).toBe('function')
})

test('Node can insert correctly', () => {
  const node = new Node(10)
  node.insert(5)
  node.insert(15)
  node.insert(17)

  expect(node.left.data).toBe(5)
  expect(node.right.data).toBe(15)
  expect(node.right.right.data).toBe(17)
})

test('Contains returns node with the same data', () => {
  const node = new Node(10)
  node.insert(5)
  node.insert(15)
  node.insert(20)
  node.insert(0)
  node.insert(-5)
  node.insert(3)

  const three = node.left.left.right
  expect(node.contains(3)).toEqual(three)
})

test('Contains returns null if value not found', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  expect(node.contains(9999)).toEqual(null);
})
