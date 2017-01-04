import { expect } from 'chai'
import reverse_string from './index.js'

describe('reverse_string', () => {
  it('should return reverse_string of numeric values', () => {
    expect(reverse_string('hiyo')).to.be.equal('oyih')

    expect(reverse_string('12345')).to.be.equal('54321')
  })
})
