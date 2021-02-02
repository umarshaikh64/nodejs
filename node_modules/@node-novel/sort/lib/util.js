"use strict";
/**
 * Created by user on 2020/6/5.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports._trim = exports._match = void 0;
function _match(a, b, { r, mainFn, }) {
    let ta;
    let tb;
    if ((ta = r.exec(a)) && (tb = r.exec(b))) {
        let r = parseFloat(ta[0]) - parseFloat(tb[0]);
        if (r !== 0) {
            return r;
        }
        let a1 = ta.input.slice(ta[0].length);
        let b1 = tb.input.slice(tb[0].length);
        if (a1 != b1) {
            let i = 0;
            while (typeof a1[i] != 'undefined' && a1[i] === b1[i] && (!/^\d$/.test(b1[i]))) {
                i++;
            }
            a1 = a1.slice(i);
            b1 = b1.slice(i);
        }
        return mainFn(a1, b1, true);
    }
}
exports._match = _match;
function _trim(input) {
    return input
        .replace(/^[_\s]+(\d+)/, '$1')
        .replace(/^\D(\d+)/, '$1')
        .trim();
}
exports._trim = _trim;
//# sourceMappingURL=util.js.map