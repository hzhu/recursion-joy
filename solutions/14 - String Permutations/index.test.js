import permutations from './'

describe.skip('permutations', () => {
  test('should return the correct permutations for a single character string', () => {
    const result = permutations('o')

    expect(result.has('o')).toBe(true)
    expect(result.has('x')).toBe(false)

  })

  test('should return the correct permutations for a two character string', () => {
    const result = permutations('hi')

    expect(result.has('hi')).toBe(true)
    expect(result.has('ih')).toBe(true)
    expect(result.has('h')).toBe(false)
    expect(result.has('i')).toBe(false)
  })

  test('should return the correct permutations for a four character string', () => {
    const result = permutations('cats')

    const permutations = [
      'cats', 'cast', 'ctas', 'ctsa', 'csat', 'csta', 'acts', 'acst', 'atcs', 'atsc', 'asct', 'astc', 'tcas', 'tcsa', 'tacs', 'tasc', 'tsca', 'tsac', 'scat', 'scta', 'sact', 'satc', 'stca', 'stac'
    ]

    permutations.forEach(permutation => {
      expect(result.has(permutation)).toBe(true)
    })

    expect(result.has('cat')).toBe(false)
    expect(result.has('ca')).toBe(false)
    expect(result.has('c')).toBe(false)
  })
})
