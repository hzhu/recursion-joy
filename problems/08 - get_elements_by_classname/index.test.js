import { expect } from 'chai'
import get_elements_by_classname from './index.js'

describe('get_elements_by_classname', () => {
  it('should return a list of nodes that have classname', () => {
    const a = document.createElement('div')
    a.className = 'foo'
    document.body.appendChild(a)

    var results = get_elements_by_classname(document.body, 'foo')

    expect(results.length).to.be.equal(2)
    expect(results[1].className).to.be.equal('foo')
  })
})
