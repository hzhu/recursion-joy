import { expect } from 'chai'
import is_palindrome from './index'

describe('is_palindrome', () => {
  it('should return true for palindrome string', () => {
    expect(is_palindrome('racecar')).to.equal(true)
  })

  it('should return false for non-palindrome string', () => {
    expect(is_palindrome('foo')).to.equal(false)
    expect(is_palindrome('朱学进')).to.be.equal(false)
  })

  it('should handle string with length 0', () => {
    expect(is_palindrome('')).to.be.equal(true)
  })

  it('should handle empty strings', () => {
    expect(is_palindrome(' ')).to.be.equal(true)
    expect(is_palindrome('  ')).to.be.equal(true)
  })
})
