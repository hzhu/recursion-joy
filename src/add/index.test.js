import { expect } from 'chai'
import add from './index'

describe('add', () => {
  it('should add two integers', () => {
    const five = add(3, 2)
    expect(five).to.equal(5)
  })
})
