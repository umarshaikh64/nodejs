/// <reference types="node" />
/**
 * Module dependencies.
 */
import { MarkedOptions } from 'marked';
import { LF, CRLF, CR } from 'crlf-normalize';
import { IRawObjectPlus } from './lib/RawObject';
export interface IOptionsParse {
    /**
     * @deprecated
     */
    crlf?: typeof LF | typeof CRLF | typeof CR;
    oldParseApi?: boolean;
    allowBlockquote?: boolean;
    disableKeyToLowerCase?: boolean;
    markedOptions?: MarkedOptions;
    filterObjectKey?: any;
}
export declare const defaultOptionsParse: IOptionsParse;
export interface IObjectParse {
    [key: string]: any;
}
/**
 * Parse the given `str` of markdown.
 *
 * @param {String | Buffer} str
 * @param {Object} options
 * @return {Object}
 * @api public
 */
export declare function parse(str: string, options?: IOptionsParse): IObjectParse;
export declare function parse(str: Buffer, options?: IOptionsParse): IObjectParse;
export declare function stringify(dataInput: unknown | IRawObjectPlus, level?: number, skip?: any[], k?: any): string;
declare const _default: typeof import("./core");
export default _default;
