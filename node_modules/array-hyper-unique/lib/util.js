"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultChecker = exports.defaultFilter = exports.equals = void 0;
const deep_eql_1 = __importDefault(require("deep-eql"));
const lodash_1 = require("lodash");
function equals(a1, a2) {
    return deep_eql_1.default(a1, a2);
}
exports.equals = equals;
function defaultFilter(options = {}) {
    const checker = options.checker || defaultChecker;
    const filter = options.filter || null;
    const find = options.removeFromFirst ? lodash_1.findLastIndex : lodash_1.findIndex;
    const cb = (val, index, arr) => {
        let i = find(arr, a => checker(a, val, arr, arr));
        return i == index && (!filter || filter(val));
    };
    return cb;
}
exports.defaultFilter = defaultFilter;
function defaultChecker(element, value, arr_new, arr_old) {
    return deep_eql_1.default(element, value);
}
exports.defaultChecker = defaultChecker;
//# sourceMappingURL=util.js.map