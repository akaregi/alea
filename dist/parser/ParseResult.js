"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function newResult(err, message, formula) {
    return {
        error: err,
        message: message,
        formula: formula
    };
}
exports.newResult = newResult;
