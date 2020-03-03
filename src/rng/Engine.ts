import prand from 'pure-rand/*'

/**
 * `RandomNumberGenerator` で使用する乱数生成法
 */
export enum Engine {
  XORSHIFT128PLUS,
  XOROSHIRO128PLUS,
  MERSENNE,
  CONGRUENTIAL,
  CONGRUENTIAL32
}

/**
 * `RandomGenerator` を取得する
 *
 * @param engine 乱数生成法
 * @param seed シード値
 */
export function getEngine (engine: Engine, seed: number): prand.RandomGenerator {
  switch (engine) {
    case Engine.XORSHIFT128PLUS:
      return prand.xorshift128plus(seed)

    case Engine.XOROSHIRO128PLUS:
      return prand.xoroshiro128plus(seed)

    case Engine.MERSENNE:
      return prand.mersenne(seed)

    case Engine.CONGRUENTIAL:
      return prand.congruential(seed)

    case Engine.CONGRUENTIAL32:
      return prand.congruential32(seed)
  }
}
