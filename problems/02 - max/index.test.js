import { expect } from 'chai'
import max from './index.js'

describe('max', () => {
  it('should find the largest integer in an array', () => {
    const list = [1,2,3]
    const largest = max(list)
    expect(largest).to.be.equal(3)
  })
})