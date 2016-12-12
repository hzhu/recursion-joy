import { expect,
        assert } from 'chai'

import Fibonacci from './index'


describe('Fibonacci', () => {
  it('Fibonacci should be a constructor', () => {
    const fib = new Fibonacci()
    expect(fib).to.be.an.instanceof(Fibonacci)
  })

  it('should have an at_index method', () => {
    const fib = new Fibonacci()
    assert.isFunction(fib.at_index)
  })

  it('should compute the fibonacci number at index n', () => {
    const fib = new Fibonacci()
    const answer = fib.at_index(10)
    expect(answer).to.equal(55)
  })

  it('should cover base cases', () => {
    const fib = new Fibonacci()

    expect(fib.at_index(0)).to.equal(0)
    expect(fib.at_index(1)).to.equal(1)
    expect(fib.at_index(2)).to.equal(1)
  })

  it('should have an object for caching', () => {
    const fib = new Fibonacci
    assert.isObject(fib.memo)
  })

  it('should cache computed results', () => {
    const fib = new Fibonacci()
    fib.at_index(10)
    expect(fib.memo[5]).to.equal(5)
  })
})
