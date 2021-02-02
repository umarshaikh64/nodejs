import { IOptions } from './lib/types';
export * from './lib/types';
export * from './lib/util';
export declare function array_unique<T>(arr: T, options?: IOptions<T>): T;
export declare function array_unique_overwrite<T>(arr: T, options?: IOptions<T>): T;
export declare function lazy_unique<T extends any[]>(arr: T): T;
export declare namespace lazy_unique {
    export var array_unique: typeof import(".").array_unique;
    export var array_unique_overwrite: typeof import(".").array_unique_overwrite;
    export var lazy_unique_overwrite: typeof import(".").lazy_unique_overwrite;
    export var equals: typeof import("./lib/util").equals;
    export var defaultFilter: typeof import("./lib/util").defaultFilter;
    export var defaultChecker: typeof import("./lib/util").defaultChecker;
    export var lazy_unique: typeof import(".").lazy_unique;
    var _a: typeof import(".").lazy_unique;
    export { _a as default };
}
export declare function lazy_unique<T, T1, T2>(a1: T1, a2: T2, ...arr: T[]): Array<T | T1 | T2>;
export declare namespace lazy_unique {
    export var array_unique: typeof import(".").array_unique;
    export var array_unique_overwrite: typeof import(".").array_unique_overwrite;
    export var lazy_unique_overwrite: typeof import(".").lazy_unique_overwrite;
    export var equals: typeof import("./lib/util").equals;
    export var defaultFilter: typeof import("./lib/util").defaultFilter;
    export var defaultChecker: typeof import("./lib/util").defaultChecker;
    export var lazy_unique: typeof import(".").lazy_unique;
    var _a: typeof import(".").lazy_unique;
    export { _a as default };
}
export declare function lazy_unique<T>(...arr: Array<T | T[]>): T | (T | T[])[];
export declare namespace lazy_unique {
    export var array_unique: typeof import(".").array_unique;
    export var array_unique_overwrite: typeof import(".").array_unique_overwrite;
    export var lazy_unique_overwrite: typeof import(".").lazy_unique_overwrite;
    export var equals: typeof import("./lib/util").equals;
    export var defaultFilter: typeof import("./lib/util").defaultFilter;
    export var defaultChecker: typeof import("./lib/util").defaultChecker;
    export var lazy_unique: typeof import(".").lazy_unique;
    var _a: typeof import(".").lazy_unique;
    export { _a as default };
}
export declare function lazy_unique_overwrite<T>(...arr: Array<T | T[]>): T | (T | T[])[];
export default lazy_unique;
