"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lazy_unique_overwrite = exports.lazy_unique = exports.array_unique_overwrite = exports.array_unique = void 0;
const util_1 = require("./lib/util");
__exportStar(require("./lib/types"), exports);
__exportStar(require("./lib/util"), exports);
function array_unique(arr, options = {}) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`Expected an Array but got ${typeof arr}.`);
    }
    const cb = util_1.defaultFilter(options);
    if (options.overwrite) {
        let index = arr.length;
        while (index--) {
            let val = arr[index];
            if (!cb(val, index, arr)) {
                arr.splice(index, 1);
            }
        }
        return arr;
    }
    // @ts-ignore
    return arr.filter(cb);
}
exports.array_unique = array_unique;
function array_unique_overwrite(arr, options = {}) {
    return array_unique(arr, {
        ...options,
        overwrite: true,
    });
}
exports.array_unique_overwrite = array_unique_overwrite;
// @ts-ignore
function lazy_unique(...arr) {
    if (arr.length > 1) {
        return array_unique(arr);
    }
    return array_unique(arr[0]);
}
exports.lazy_unique = lazy_unique;
function lazy_unique_overwrite(...arr) {
    if (arr.length > 1) {
        return array_unique_overwrite(arr);
    }
    return array_unique_overwrite(arr[0]);
}
exports.lazy_unique_overwrite = lazy_unique_overwrite;
lazy_unique.array_unique = array_unique;
lazy_unique.array_unique_overwrite = array_unique_overwrite;
lazy_unique.lazy_unique_overwrite = lazy_unique_overwrite;
lazy_unique.equals = util_1.equals;
lazy_unique.defaultFilter = util_1.defaultFilter;
lazy_unique.defaultChecker = util_1.defaultChecker;
lazy_unique.lazy_unique = lazy_unique;
lazy_unique.default = lazy_unique;
Object.defineProperty(lazy_unique, "__esModule", { value: true });
exports.default = lazy_unique;
//# sourceMappingURL=index.js.map