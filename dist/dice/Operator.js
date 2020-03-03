"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operator;
(function (Operator) {
    Operator["BIGGER"] = ">";
    Operator["SMALLER"] = "<";
    Operator["BIGGER_OR_EQUAL"] = ">=";
    Operator["SMALLER_OR_EQUAL"] = "<=";
    Operator["EQUAL"] = "=";
    Operator["UNKNOWN"] = "?";
})(Operator = exports.Operator || (exports.Operator = {}));
function getOperator(operator) {
    switch (operator) {
        case '>':
            return Operator.BIGGER;
        case '>=':
            return Operator.BIGGER_OR_EQUAL;
        case '<':
            return Operator.SMALLER;
        case '<=':
            return Operator.SMALLER_OR_EQUAL;
        case '=':
            return Operator.EQUAL;
        default:
            return Operator.UNKNOWN;
    }
}
exports.getOperator = getOperator;
