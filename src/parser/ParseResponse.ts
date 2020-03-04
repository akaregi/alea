import { ParseState } from './ParseState'
import { DiceFormula } from '../dice/Dice'

/** ダイス式のパース結果 */
export interface ParseResponse {
  /** エラーの有無 */
  state: ParseState,

  /** ダイス式 */
  formula?: DiceFormula
}

/**
 * パース結果を構築する
 *
 * @param err エラーの有無
 * @param message メッセージ
 * @param formula ダイス式
 */
export function newResult (state: ParseState, formula?: DiceFormula): ParseResponse {
  return {
    state: state,
    formula: formula
  }
}
