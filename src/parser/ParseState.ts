/**
 * パース結果の状態
 */
export enum ParseState {
  /** 正常 */
  OK = 'OK',

  /** ダイス式が異常 */
  INVALID_FORMULA = 'INVALID_FORMULA',

  /** ダイス数が負数 */
  NEGATIVE_AMOUNT = 'NEGATIVE_AMOUNT',

  /** ダイス面が負数 */
  NEGATIVE_FACES = 'NEGATIVE_FACES',

  /** 演算子が異常 */
  INVALID_OPERATOR = 'INVALID_OPERATOR',

  /** オペランドが異常 */
  INVALID_OPERAND = 'INVALID_OPERAND'
}
