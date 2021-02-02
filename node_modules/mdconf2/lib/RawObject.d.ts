/**
 * Created by user on 2020/1/15.
 */
import { Token, Tokens } from 'marked';
export declare const SYMBOL_RAW_DATA: unique symbol;
export declare const SYMBOL_RAW_VALUE: unique symbol;
export declare type IRawObjectData = Token | IRawObjectBlockquote | IRawObjectDataPlus;
export declare type IRawObjectDataPlus = IRawObjectTokenPlus<Tokens.HTML> | IRawObjectTokenPlus<Tokens.Code>;
export declare type IRawObjectPlus = RawObject<string, IRawObjectDataPlus>;
export declare type IRawObjectTokenPlus<T extends Tokens.HTML | Tokens.Code> = T & {
    paragraph: string[];
};
export interface ITokenText2 extends Omit<Tokens.Text, 'type'> {
    type: 'text2';
}
export interface IRawObjectBlockquote {
    type: 'blockquote';
    text: string[];
    paragraph: string[];
}
export declare class RawObject<RV extends unknown, RD extends IRawObjectData> {
    [SYMBOL_RAW_DATA]: RD;
    [SYMBOL_RAW_VALUE]: RV;
    constructor(source: RV, raw?: RD);
    inspect(): string;
    toJSON(): string;
    toString(): string;
    getTypeof(): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array";
    getRawData(): RD;
    getRawValue(): RV;
    static isRawObject<T extends RawObject<any, any>>(v: any | T): v is Extract<T, RawObject<any, any>>;
    static isRawObject<T extends RawObject<unknown, IRawObjectData>>(v: any): v is T;
    /**
     * will remove hidden data and get source data
     *
     * @param {RawObject} data
     */
    static removeRawData<T>(data: RawObject<T, any>): T;
    static removeRawData<T>(data: T): T;
}
export default RawObject;
