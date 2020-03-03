import { Engine } from './../src/rng/Engine'
import { RandomNumberGenerator } from './../src/rng/RandomNumberGenerator'
import { assert } from 'chai'

const SEED = 42
const ENGINE = Engine.XORSHIFT128PLUS

const rng = new RandomNumberGenerator(1, 100, SEED, ENGINE)

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
