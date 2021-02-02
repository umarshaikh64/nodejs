/**
 * Created by user on 2020/1/15.
 */
import { Token, Tokens, InlineLexer, TokensList } from 'marked';
import { ITokenText2 } from './RawObject';
import { IOptionsParse } from '../core';
export declare function getobjectbyid<T extends unknown>(a: string[], conf: object): T;
export interface ITable {
    headers: Tokens.Table["header"];
    rows: Tokens.Table["cells"];
}
/**
 * Add `str` to `obj` with the given `keys`
 * which represents the traversal path.
 *
 * @api private
 */
export declare function put(obj: any, keys: string[], str: string, code?: boolean, table?: ITable, options?: IOptionsParse, others?: {
    type?: (Token | ITokenText2)["type"];
}): void;
/**
 * Normalize `str`.
 */
export declare function normalize(str: string, options?: IOptionsParse): string;
export declare function makeCodeBlock(value: any, lang?: Tokens.Code["lang"]): string;
export declare function createInlineLexer(toks: TokensList, options: IOptionsParse): InlineLexer;
