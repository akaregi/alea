import { RandomGenerator, Distribution, uniformIntDistribution } from 'pure-rand'
import { Engine, getEngine } from './Engine'

/**
 * ランダムな整数値を出力する乱数装置
 */
export class RandomNumberGenerator {
  private engine: RandomGenerator
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
  constructor (private min: number, private max: number, seed?: number, engine?: Engine) {
    if (!seed) {
      seed = Math.random()
    }

    if (!engine) {
      engine = Engine.XORSHIFT128PLUS
    }

    this.engine = getEngine(engine, seed)
    this.distribution = uniformIntDistribution(min, max)

    const initGen = this.distribution(this.engine)

    this.N = initGen[0]
    this.generator = initGen[1]
  }

  /**
   * 現在の乱数を返して乱数装置を次の状態に進める
   *
   * @return 現在の乱数
   */
  next (): Number {
    const next = this.nextRNG()

    this.generator = next.generator
    this.N = next.n

    return this.N
  }

  setMin (min: number) {
    this.min = min

    this.updateDist()
  }

  setMax (max: number) {
    this.max = max

    this.updateDist()
  }

  /**
   * 乱数分布を更新する
   *
   * @param min 乱数の最最小値
   * @param max 乱数の最大値
   */
  updateDist (min?: number, max?: number) {
    if (min !== undefined) {
      this.min = min
    }

    if (max !== undefined) {
      this.max = max
    }

    this.distribution = uniformIntDistribution(this.min, this.max)
  }

  /**
   * 乱数装置を次の状態に進める
   */
  private nextRNG () {
    const next = this.distribution(this.generator)

    return {
      // NOTE: pure-rand の都合でインデックスでアクセスする
      //       [0] が次の乱数 [1] が状態が進んだ乱数装置
      n: next[0],
      generator: next[1]
    }
  }
}
