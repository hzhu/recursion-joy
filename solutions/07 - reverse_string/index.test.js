import { expect } from 'chai'
import reverse_string from './index'


describe('reverse_string', () => {
  it('should return a reversed string', () => {
    expect(reverse_string('lover')).to.equal('revol')
    expect(reverse_string('a')).to.equal('a')
    expect(reverse_string('')).to.equal('')
  })
})
