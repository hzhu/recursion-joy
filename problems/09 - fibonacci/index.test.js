import { expect } from 'chai'
import Fibonacci from './index.js'

describe('Fibonacci', () => {
  it('should be a class', () => {
    const fib = new Fibonacci()
    expect(fib.constructor.name).to.be.equal('Fibonacci')
  })

  it('should have a method named at_index', () => {
    const fib = new Fibonacci()
    expect(typeof fib.at_index).to.be.equal('function')
  })

  it('should have a object named memo for caching previously calculations', () => {
    const fib = new Fibonacci()
    expect(typeof fib.memo).to.be.equal('object')
  })

  it('should memoize previously calculated results from at_index', () => {
    const fib = new Fibonacci()
    fib.at_index(10)

    expect(typeof fib.memo[5]).to.be.equal('number')
  })
})

describe('at_index', () => {
  it('should calculate the Fibonacci number at index n', () => {
    const fib = new Fibonacci()
    const result = fib.at_index(10)
    console.log(fib.count, "<--")
    expect(result).to.be.equal(55)
  })
})
