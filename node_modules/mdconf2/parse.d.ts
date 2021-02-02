/**
 * Created by user on 2018/2/4/004.
 */
import { parse as _parse, IOptionsParse } from './core';
/**
 * for old api user
 */
declare function parse(str: any, options?: IOptionsParse): import("./core").IObjectParse;
declare namespace parse {
    export var parse: typeof _parse;
    var _a: typeof _parse;
    export { _a as default };
}
export = parse;
