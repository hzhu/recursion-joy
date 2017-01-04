import { expect } from 'chai'
import is_palindrome from './index.js'

describe('is_palindrome', () => {
  it('should return true if string is a is_palindrome', () => {
    expect(is_palindrome('racecar')).to.be.equal(true)
    expect(is_palindrome('日本語')).to.be.equal(false)
  })
})
