import { expect } from 'chai'
import is_palindrome from './index'

describe('is_palindrome', () => {
  it('should return true for palindrome string', () => {
    expect(is_palindrome('racecar')).to.equal(true)
  })

  it('should return false for non-palindrome string', () => {
    expect(is_palindrome('foo')).to.equal(false)
  })
})
