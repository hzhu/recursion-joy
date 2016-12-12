import { expect } from 'chai'
import max from './index'

describe('max', () => {
  it('should return the largest number in a list', () => {
    var largest_number = max([44, 0, 19, 500, -90])
    expect(largest_number).to.equal(500)
  })
})
