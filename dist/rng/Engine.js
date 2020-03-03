"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("pure-rand/*"));
var Engine;
(function (Engine) {
    Engine[Engine["XORSHIFT128PLUS"] = 0] = "XORSHIFT128PLUS";
    Engine[Engine["XOROSHIRO128PLUS"] = 1] = "XOROSHIRO128PLUS";
    Engine[Engine["MERSENNE"] = 2] = "MERSENNE";
    Engine[Engine["CONGRUENTIAL"] = 3] = "CONGRUENTIAL";
    Engine[Engine["CONGRUENTIAL32"] = 4] = "CONGRUENTIAL32";
})(Engine = exports.Engine || (exports.Engine = {}));
function getEngine(engine, seed) {
    switch (engine) {
        case Engine.XORSHIFT128PLUS:
            return _1.default.xorshift128plus(seed);
        case Engine.XOROSHIRO128PLUS:
            return _1.default.xoroshiro128plus(seed);
        case Engine.MERSENNE:
            return _1.default.mersenne(seed);
        case Engine.CONGRUENTIAL:
            return _1.default.congruential(seed);
        case Engine.CONGRUENTIAL32:
            return _1.default.congruential32(seed);
    }
}
exports.getEngine = getEngine;
