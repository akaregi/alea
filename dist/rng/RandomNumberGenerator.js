"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pure_rand_1 = require("pure-rand");
const Engine_1 = require("./Engine");
class RandomNumberGenerator {
    constructor(min, max, seed, engine) {
        this.min = min;
        this.max = max;
        if (!seed) {
            seed = Math.random();
        }
        if (!engine) {
            engine = Engine_1.Engine.XORSHIFT128PLUS;
        }
        this.engine = Engine_1.getEngine(engine, seed);
        this.distribution = pure_rand_1.uniformIntDistribution(min, max);
        const initGen = this.distribution(this.engine);
        this.N = initGen[0];
        this.generator = initGen[1];
    }
    next() {
        const next = this.nextRNG();
        this.generator = next.generator;
        this.N = next.n;
        return this.N;
    }
    setMin(min) {
        this.min = min;
        this.updateDist();
    }
    setMax(max) {
        this.max = max;
        this.updateDist();
    }
    updateDist(min, max) {
        if (min !== undefined) {
            this.min = min;
        }
        if (max !== undefined) {
            this.max = max;
        }
        this.distribution = pure_rand_1.uniformIntDistribution(this.min, this.max);
    }
    nextRNG() {
        const next = this.distribution(this.generator);
        return {
            n: next[0],
            generator: next[1]
        };
    }
}
exports.RandomNumberGenerator = RandomNumberGenerator;
