import { DiceFormula } from '../dice/Dice'

/** ダイス式のパース結果 */
export interface ParseResult {
  /** エラーの有無 */
  error: boolean,

  /** メッセージ */
  message: string,

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
export function newResult (err: boolean, message: string, formula?: DiceFormula): ParseResult {
  return {
    error: err,
    message: message,
    formula: formula
  }
}
