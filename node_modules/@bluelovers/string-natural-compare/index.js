"use strict";
/**
 * Created by user on 2020/6/4.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.caseInsensitive = exports.compareCaseInsensitive = exports.createNew = exports.naturalCompare = void 0;
const string_natural_compare_1 = __importDefault(require("string-natural-compare"));
/**
 * Compare alphanumeric strings the same way a human would,
 * using a natural order algorithm
 * (originally known as the alphanum algorithm)
 * where numeric characters are sorted
 * based on their numeric values rather than their ASCII values.
 */
function naturalCompare(a, b, opts) {
    let i;
    if (typeof a === 'number' && typeof b === 'number') {
        i = a - b;
    }
    else {
        if (typeof a === 'number') {
            a = String(a);
        }
        else if (typeof b === 'number') {
            b = String(b);
        }
        if (a === b) {
            return 0;
        }
        i = string_natural_compare_1.default(a, b, opts);
    }
    if (i !== 0 && (opts === null || opts === void 0 ? void 0 : opts.desc)) {
        i = 0 - i;
    }
    return i;
}
exports.naturalCompare = naturalCompare;
/**
 * create compare with preset options
 */
function createNew(opts) {
    return (a, b) => naturalCompare(a, b, opts);
}
exports.createNew = createNew;
/**
 * compare strings case-insensitively
 */
exports.compareCaseInsensitive = createNew({
    caseInsensitive: true,
});
exports.caseInsensitive = exports.compareCaseInsensitive;
naturalCompare.createNew = createNew;
naturalCompare.compareCaseInsensitive = exports.compareCaseInsensitive;
naturalCompare.caseInsensitive = exports.compareCaseInsensitive;
naturalCompare.default = naturalCompare;
Object.defineProperty(naturalCompare, "__esModule", { value: true });
exports.default = naturalCompare;
//# sourceMappingURL=index.js.map