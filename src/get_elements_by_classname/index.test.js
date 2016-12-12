import { expect } from 'chai'
import get_elements_by_classname from './index'


describe('get_elements_by_classname', () => {
  beforeEach(function append_mock_node() {
    const body = document.body
    const div = document.createElement('div')

    div.className = "foobar"

    body.appendChild(div)
  })

  it('should return a list of node(s) containing a given classname', () => {
    const results = get_elements_by_classname(document.body, 'foobar')

    expect(results.length).to.equal(1)
    expect(results[0].className).to.equal('foobar')
  })
})
