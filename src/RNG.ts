import { RandomGenerator, Distribution, xorshift128plus, uniformIntDistribution } from 'pure-rand'

/**
 * ランダムな整数値を出力する乱数装置
 */
export class RandomNumberGenerator {
  // NOTE: xorshift で決め打ち
  private xorshift: RandomGenerator
  private distribution: Distribution<number>

  /**
   * 現在の乱数
   */
  private N: Number

  /**
   * 現在の乱数装置
   */
  private generator: RandomGenerator

  /**
   * @param seed シード値
   * @param min 乱数の最小値
   * @param max 乱数の最大値
   */
  constructor (seed: number, min: number, max: number) {
    this.xorshift = xorshift128plus(seed)
    this.distribution = uniformIntDistribution(min, max)

    const initGen = this.distribution(this.xorshift)

    this.N = initGen[0]
    this.generator = initGen[1]
  }

  /**
   * 現在の乱数を返して乱数装置を次の状態に進める
   *
   * @return 現在の乱数
   */
  next (): Number {
    const next = this.renew()

    this.generator = next.generator
    this.N = next.n

    return this.N
  }

  /**
   * 乱数装置を次の状態に進める
   */
  private renew () {
    const next = this.distribution(this.generator)

    return {
      // NOTE: pure-rand の都合でインデックスでアクセスする
      //       [0] が次の乱数 [1] が状態が進んだ乱数装置
      n: next[0],
      generator: next[1]
    }
  }
}