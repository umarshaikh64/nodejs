"use strict";
/**
 * Created by user on 2018/2/12/012.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSortCallback = exports.naturalCompare = void 0;
const string_natural_compare_1 = __importDefault(require("@bluelovers/string-natural-compare"));
exports.naturalCompare = string_natural_compare_1.default;
const core_1 = require("./lib/core");
__exportStar(require("./lib/core"), exports);
__exportStar(require("./lib/types"), exports);
__exportStar(require("./lib/util"), exports);
exports.defaultSortCallback = core_1.createSortCallback({
    dotNum: true,
});
exports.default = exports.defaultSortCallback;
//# sourceMappingURL=index.js.map