"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Operator_1 = require("../dice/Operator");
const ParseResult_1 = require("./ParseResult");
const PARSE_REGEXP = /(\d+)(.)(\d+)(<=|<|>=|>|=)?(\d+)?/;
function parse(dice) {
    var _a;
    const args = (_a = dice.match(PARSE_REGEXP)) === null || _a === void 0 ? void 0 : _a.slice(1, 6);
    if (args === undefined) {
        return ParseResult_1.newResult(true, `Invalid dice formula: ${dice}`);
    }
    const amount = parseInt(args[0]);
    const faces = parseInt(args[2]);
    const def = {
        amount: amount,
        faces: faces
    };
    const operator = Operator_1.getOperator(args[3]);
    const operand = parseInt(args[4]);
    if (operator === Operator_1.Operator.UNKNOWN) {
        return ParseResult_1.newResult(true, `Invalid operator is given: ${args[3]}`);
    }
    if (isNaN(operand)) {
        return ParseResult_1.newResult(true, `Invalid operand is given: ${args[4]}`);
    }
    const formula = {
        definition: def,
        condition: {
            operator: operator,
            operand: operand
        }
    };
    return ParseResult_1.newResult(false, 'OK', formula);
}
exports.parse = parse;
