"use strict";
/**
 * Created by user on 2020/1/15.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInlineLexer = exports.makeCodeBlock = exports.normalize = exports.put = exports.getobjectbyid = void 0;
const marked_1 = require("marked");
const core_1 = require("../core");
function getobjectbyid(a, conf) {
    let ret = conf;
    for (let i of a) {
        ret = ret[i];
    }
    return ret;
}
exports.getobjectbyid = getobjectbyid;
/**
 * Add `str` to `obj` with the given `keys`
 * which represents the traversal path.
 *
 * @api private
 */
function put(obj, keys, str, code, table, options = {}, others = {}) {
    let target = obj;
    let last;
    let key;
    for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        last = target;
        target[key] = target[key] || {};
        target = target[key];
    }
    // code
    if (code) {
        if (!Array.isArray(last[key]))
            last[key] = [];
        last[key].push(str);
        return;
    }
    // table
    if (table) {
        if (!Array.isArray(last[key]))
            last[key] = [];
        for (let ri = 0; ri < table.rows.length; ri++) {
            let arrItem = {};
            for (let hi = 0; hi < table.headers.length; hi++) {
                arrItem[normalize(table.headers[hi], options)] = table.rows[ri][hi];
            }
            last[key].push(arrItem);
        }
        return;
    }
    let isKey;
    let i = str.indexOf(':');
    if (options.filterObjectKey) {
        if (typeof options.filterObjectKey == 'function') {
            isKey = options.filterObjectKey(str, obj, others);
        }
        else {
            i = str.search(options.filterObjectKey);
            isKey = i != -1;
        }
    }
    // list
    if ((isKey === false || -1 == i || others.type == 'text2')) {
        if (!Array.isArray(last[key]))
            last[key] = [];
        last[key].push(str.trim());
        return;
    }
    // map
    key = normalize(str.slice(0, i), options);
    let val = str.slice(i + 1).trim();
    target[key] = val;
}
exports.put = put;
/**
 * Normalize `str`.
 */
function normalize(str, options = {}) {
    let key = str.replace(/\s+/g, ' ');
    if (!options.disableKeyToLowerCase) {
        key = key.toLowerCase();
    }
    return key.trim();
}
exports.normalize = normalize;
function makeCodeBlock(value, lang) {
    return `\n\`\`\`${lang || ''}\n${value}\n\`\`\`\n`;
}
exports.makeCodeBlock = makeCodeBlock;
function createInlineLexer(toks, options) {
    let opts = Object.assign({}, core_1.defaultOptionsParse.markedOptions, options.markedOptions);
    // @ts-ignore
    let inline = new marked_1.InlineLexer(toks.links, opts);
    return inline;
}
exports.createInlineLexer = createInlineLexer;
//# sourceMappingURL=core.js.map