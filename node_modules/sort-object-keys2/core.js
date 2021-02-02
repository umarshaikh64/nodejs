"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortObjectKeys = exports.sortObject = void 0;
function sortObject(object, sortWith) {
    let options = {};
    if (typeof sortWith === 'function') {
        options.sort = sortWith;
    }
    else if (Array.isArray(sortWith)) {
        options.keys = sortWith;
    }
    else {
        options = Object.assign(options, sortWith);
    }
    let { keys = [], useSource, } = options;
    if (options.onlyKeys) {
        useSource = false;
        if (typeof keys.length !== 'number' || keys.length === 0) {
            throw new ReferenceError(`options.key is empty or not exists.`);
        }
    }
    else {
        keys = keys.concat()
            .concat(Object.keys(object).sort(options.sort));
    }
    keys = array_unique(keys);
    if (options.desc) {
        keys = keys.reverse();
    }
    let ret = keys.reduce(function (total, key) {
        if (options.allowNotExists || key in object) {
            total[key] = object[key];
        }
        return total;
    }, {});
    if (useSource) {
        Object.keys(ret)
            .forEach(function (key, index, array) {
            delete object[key];
            object[key] = ret[key];
        });
        return object;
    }
    return ret;
}
exports.sortObject = sortObject;
exports.sortObjectKeys = sortObject;
sortObject.sortObjectKeys = sortObject;
// @ts-ignore
sortObject.default = sortObject;
function array_unique(array) {
    return array.filter(function (el, index, arr) {
        return index === arr.indexOf(el);
    });
}
exports.default = sortObject;
//# sourceMappingURL=core.js.map