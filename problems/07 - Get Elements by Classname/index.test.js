import getElementsByClassName from './'

test('given a root node, should return a list of node(s) containing a given classname', () => {
  const CLASS_NAME = 'foobar'
  const div = document.createElement('div')
  div.className = CLASS_NAME

  document.body.appendChild(div)

  const results = getElementsByClassName(CLASS_NAME, document.body)

  expect(results.length).toBe(1)
  expect(results[0].className).toBe(CLASS_NAME)
})
