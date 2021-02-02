"use strict";
/**
 * Created by user on 2018/2/14/014.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalize_val = exports.normalize_strip = void 0;
const str_util_1 = __importDefault(require("str-util"));
const normalize_num_1 = __importDefault(require("normalize-num"));
const novel_filename_1 = __importDefault(require("@lazy-cjk/novel-filename"));
const zh_slugify_1 = require("@lazy-cjk/zh-slugify");
function normalize_strip(str, isDir) {
    if (isDir) {
        if (/^p?\d{4,}[\s_](.+)(_\(\d+\))$/.exec(str)) {
            str = RegExp.$1;
        }
        else if (/^p?\d{4,}[\s_](.+)(_\(\d+\))?$/.exec(str)) {
            str = RegExp.$1;
        }
    }
    else {
        if (/^\d+_(.+)\.\d+$/.exec(str)) {
            str = RegExp.$1;
        }
        else if (/^c?\d{4,}_(.+)$/.exec(str)) {
            str = RegExp.$1;
        }
    }
    str = str_util_1.default.trim(str, '　');
    return str;
}
exports.normalize_strip = normalize_strip;
function normalize_val(str, padNum = 5, options = {}) {
    padNum = padNum || options.padNum;
    //console.log(111, str);
    str = novel_filename_1.default.filename(str);
    if (/^(?:序|プロローグ|Prologue)/i.test(str)) {
        str = '0_' + str;
    }
    str = str.replace(/^(web)版(\d+)/i, '$1$2');
    //str = str.replace(/^[cp](\d{4,}_)/, '$1');
    str = str_util_1.default.toHalfWidth(str)
        .toLowerCase();
    str = str_util_1.default.trim(str, '　');
    str = str_util_1.default.zh2num(str).toString();
    str = str_util_1.default.zh2num(str, {
        truncateOne: 2,
        flags: 'ug',
    }).toString();
    //console.log(str);
    str = normalize_num_1.default(str, {
        all: true,
        roman: options.checkRoman,
    });
    /*
    if (options.checkRoman)
    {
        let m = isRoman(str);

        if (m)
        {
            let n = deromanize(normalizeRoman(m[1]));
            str = n.toString() + str.slice(m[1].length);
            //console.log(m[1], n, str);
        }
    }

    str = circle2num(str);
    */
    str = str.replace(/\d+/g, function ($0) {
        return $0.padStart(padNum, '0');
    });
    str = str
        .replace(/^第+/, '')
        //.replace(/(\d)[章話]/g, '$1_')
        //.replace(/第(\d)/g, '_$1')
        //.replace(/\./g, '_')
        .replace(/[―—－──\-―—─＝=―——─ー─]/g, '_')
        .replace(/[\s　]/g, '_')
        .replace(/[\(\)〔［【《（「『』」》）】〕］〔［〕］]/g, '_')
        .replace(/[·‧・···•・·᛫•․‧∙⋅⸱⸳・ꞏ·‧・···•˙●‧﹒]/g, '_')
        .replace(/[：：︰﹕：︓∶:]/ug, '_')
        .replace(/[・:,]/g, '_')
        .replace(/_+$/g, '')
        .replace(/_+/g, '_');
    /*
    str = zh2jp(cn2tw(str) as string, {
        safe: false,
    });
    */
    /*
    str = zhTable.auto(cn2tw(str, {
        safe: false,
        // @ts-ignore
        greedyTable: true,
    }), {
        safe: false,
        // @ts-ignore
        greedyTable: true,
    })[0];
    */
    str = zh_slugify_1.slugify(str, true);
    return str;
}
exports.normalize_val = normalize_val;
exports.default = exports;
//# sourceMappingURL=index.js.map