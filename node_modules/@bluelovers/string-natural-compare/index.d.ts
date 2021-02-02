/**
 * Created by user on 2020/6/4.
 */
export interface IOptionsStringNaturalCompare {
    /**
     * Set to true to compare strings case-insensitively. Default: false.
     */
    caseInsensitive?: boolean;
    /**
     * A string of characters that define a custom character ordering. Default: undefined.
     */
    alphabet?: string;
}
export interface IOptionsNaturalCompare extends IOptionsStringNaturalCompare {
    desc?: boolean;
}
/**
 * Compare alphanumeric strings the same way a human would,
 * using a natural order algorithm
 * (originally known as the alphanum algorithm)
 * where numeric characters are sorted
 * based on their numeric values rather than their ASCII values.
 */
export declare function naturalCompare(a: any, b: any, opts?: IOptionsNaturalCompare): number;
export declare namespace naturalCompare {
    export var createNew: typeof import(".").createNew;
    export var compareCaseInsensitive: (a: any, b: any) => number;
    export var caseInsensitive: (a: any, b: any) => number;
    var _a: typeof naturalCompare;
    export { _a as default };
}
/**
 * create compare with preset options
 */
export declare function createNew(opts?: IOptionsNaturalCompare): (a: any, b: any) => number;
/**
 * compare strings case-insensitively
 */
export declare const compareCaseInsensitive: (a: any, b: any) => number;
export { compareCaseInsensitive as caseInsensitive };
export default naturalCompare;
