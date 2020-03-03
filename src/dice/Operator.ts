/**
 * ダイス条件式のオペレータ
 */
export enum Operator {
  /**
   * X > Y
   */
  BIGGER = '>',

  /**
   * X < Y
   */
  SMALLER = '<',

  /**
   * X >= Y
   */
  BIGGER_OR_EQUAL = '>=',

  /**
   * X <= Y
   */
  SMALLER_OR_EQUAL = '<=',

  /**
   * X = Y
   */
  EQUAL = '=',

  /**
   * Unknown operator
   */
  UNKNOWN = '?'
}

export function getOperator (operator: string): Operator {
  switch (operator) {
    case '>':
      return Operator.BIGGER

    case '>=':
      return Operator.BIGGER_OR_EQUAL

    case '<':
      return Operator.SMALLER

    case '<=':
      return Operator.SMALLER_OR_EQUAL

    case '=':
      return Operator.EQUAL

    default:
      return Operator.UNKNOWN
  }
}
