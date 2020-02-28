import { RandomGenerator, Distribution, xorshift128plus, uniformIntDistribution } from 'pure-rand'

export class RandomNumberGenerator {
  private xorshift: RandomGenerator
  private distribution: Distribution<number>

  private N: Number
  private nextGen: RandomGenerator

  constructor (seed: number, min: number, max: number) {
    this.xorshift = xorshift128plus(seed)
    this.distribution = uniformIntDistribution(min, max)

    const initGen = this.distribution(this.xorshift)

    this.N = initGen[0]
    this.nextGen = initGen[1]
  }

  next (): Number {
    const next = this.renew()

    this.nextGen = next.generator
    this.N = next.n

    return this.N
  }

  private renew () {
    const next = this.distribution(this.nextGen)

    return {
      n: next[0],
      generator: next[1]
    }
  }
}
