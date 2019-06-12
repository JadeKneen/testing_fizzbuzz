const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
  it('returns Fizz when divisable by 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz')
  })
})

describe('fizzbuzz', () => {
  it('returns Buzz when divisable by 5', () => {
    expect(fizzbuzz(25)).toBe('Buzz')
  })
})

describe('fizzbuzz', () => {
  it('returns Fizzbuzz when divisable by 3 or 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz')
  })
})
