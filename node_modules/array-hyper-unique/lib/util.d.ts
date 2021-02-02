import { IOptions } from './types';
export declare function equals<T>(a1: T, a2: T): boolean;
export declare function equals<T>(a1: T, a2: unknown): a2 is T;
export declare function equals<T>(a1: unknown, a2: T): a1 is T;
export declare function defaultFilter<T>(options?: IOptions<T>): <K extends any[]>(val: K[keyof K], index: number, arr: K) => boolean;
export declare function defaultChecker<T, R>(element: T, value: R, arr_new?: Array<T | R>, arr_old?: Array<T | R>): boolean;
