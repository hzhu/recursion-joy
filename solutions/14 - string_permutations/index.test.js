import { expect } from 'chai'

import get_permutations from './index'



describe('get_permutations', () => {
  it('should return the correct permutations for a single character string', () => {
    const result = get_permutations('o')

    expect(result.has('o')).to.equal(true)
    expect(result.has('x')).to.equal(false)

  })

  it('should return the correct permutations for a two character string', () => {
    const result = get_permutations('hi')

    expect(result.has('hi')).to.equal(true)
    expect(result.has('ih')).to.equal(true)
    expect(result.has('h')).to.equal(false)
    expect(result.has('i')).to.equal(false)
  })

  it('should return the correct permutations for a four character string', () => {
    const result = get_permutations('cats')

    const permutations = [
      'cats', 'cast', 'ctas', 'ctsa', 'csat', 'csta', 'acts', 'acst', 'atcs', 'atsc', 'asct', 'astc', 'tcas', 'tcsa', 'tacs', 'tasc', 'tsca', 'tsac', 'scat', 'scta', 'sact', 'satc', 'stca', 'stac'
    ]

    permutations.forEach(permutation => {
      expect(result.has(permutation)).to.equal(true)
    })

    expect(result.has('cat')).to.equal(false)
    expect(result.has('ca')).to.equal(false)
    expect(result.has('c')).to.equal(false)
  })
})
