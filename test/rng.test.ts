import { assert } from 'chai'
import { RandomNumberGenerator } from '../src/RNG'

const SEED = 42

const rng = new RandomNumberGenerator(SEED, 1, 100)

describe('乱数生成装置', () => {
  it('D3', () => assert(test(1, 3)))
  it('D4', () => assert(test(1, 4)))
  it('D6', () => assert(test(1, 6)))
  it('D8', () => assert(test(1, 8)))
  it('D10', () => assert(test(1, 10)))
  it('D20', () => assert(test(1, 20)))
  it('D100', () => assert(test(1, 100)))
})

function test (min: number, max: number) {
  rng.updateDist(min, max)

  const value = rng.next()

  if (value < min) {
    return false
  }

  if (value > max) {
    return false
  }

  return true
}
