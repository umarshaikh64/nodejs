"use strict";
/**
 * Created by user on 2020/6/5.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSortCallback = void 0;
const string_natural_compare_1 = __importDefault(require("@bluelovers/string-natural-compare"));
const types_1 = require("./types");
const util_1 = require("./util");
/**
 * create a compare callback by (transpileBase value) -> trigger(transpile value) -> failbackSort
 * @param options
 */
function createSortCallback(options = {}) {
    const r = options.dotNum ? /^(\d+(?:\.\d+)?)/ : /^(\d+)/;
    const failbackSort = options.failbackSort || string_natural_compare_1.default;
    const trigger = options.trigger || util_1._match;
    let transpile = options.transpile || util_1._trim;
    let transpileBase = options.transpileBase;
    if (options.toLowerCase) {
        let fnLowerCase;
        if (typeof options.toLowerCase === 'function') {
            fnLowerCase = options.toLowerCase;
        }
        else {
            let fn = 'toLowerCase';
            if (typeof options.toLowerCase === 'number') {
                if (options.toLowerCase !== types_1.EnumToLowerCase.toLowerCase) {
                    fn = 'toLocaleLowerCase';
                }
            }
            fnLowerCase = (input, ...argv) => input[fn](...argv);
        }
        if (fnLowerCase) {
            if (transpileBase) {
                transpileBase = ((old) => {
                    return function (input, ...argv) {
                        return fnLowerCase(old(input, ...argv), ...argv);
                    };
                })(transpileBase);
            }
            else {
                transpileBase = fnLowerCase;
            }
        }
    }
    let fnSortCallback = function fnSortCallback(a, b, isSub) {
        if (a === b) {
            return 0;
        }
        let ret = trigger(transpile(a, isSub), transpile(b, isSub), {
            r,
            mainFn: fnSortCallback,
            isSub,
        });
        return (typeof ret == 'number') ? ret : failbackSort(a, b);
    };
    if (transpileBase) {
        fnSortCallback = (function (oldFn) {
            return function (a, b, isSub) {
                if (a === b) {
                    return 0;
                }
                if (isSub) {
                    return oldFn(a, b, isSub);
                }
                return oldFn(transpileBase(a), transpileBase(b), isSub);
            };
        })(fnSortCallback);
    }
    else {
        transpileBase = (input) => input;
    }
    fnSortCallback.failbackSort = failbackSort;
    fnSortCallback.trigger = trigger;
    fnSortCallback.transpile = transpile;
    fnSortCallback.transpileBase = transpileBase;
    fnSortCallback.fnSortCallback = fnSortCallback;
    return fnSortCallback;
}
exports.createSortCallback = createSortCallback;
//# sourceMappingURL=core.js.map