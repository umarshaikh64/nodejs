"use strict";
/**
 * Created by user on 2018/3/24/024.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SYMBOL_RAW_DATA = exports.SYMBOL_RAW_VALUE = exports.RawObject = exports.isPlainObject = exports.defaultOptionsParse = exports.stringify = exports.parse = exports.mdconf = void 0;
const core_1 = __importStar(require("./core"));
exports.mdconf = core_1.default;
Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return core_1.parse; } });
Object.defineProperty(exports, "stringify", { enumerable: true, get: function () { return core_1.stringify; } });
const is_plain_object_1 = __importDefault(require("is-plain-object"));
exports.isPlainObject = is_plain_object_1.default;
var core_2 = require("./core");
Object.defineProperty(exports, "defaultOptionsParse", { enumerable: true, get: function () { return core_2.defaultOptionsParse; } });
var RawObject_1 = require("./lib/RawObject");
Object.defineProperty(exports, "RawObject", { enumerable: true, get: function () { return RawObject_1.RawObject; } });
Object.defineProperty(exports, "SYMBOL_RAW_VALUE", { enumerable: true, get: function () { return RawObject_1.SYMBOL_RAW_VALUE; } });
Object.defineProperty(exports, "SYMBOL_RAW_DATA", { enumerable: true, get: function () { return RawObject_1.SYMBOL_RAW_DATA; } });
exports.default = exports;
//# sourceMappingURL=index.js.map