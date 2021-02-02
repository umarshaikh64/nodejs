/**
 * Created by user on 2020/6/5.
 */
import { ICreateSortCallbackOptions, IFnSortCallback } from './types';
/**
 * create a compare callback by (transpileBase value) -> trigger(transpile value) -> failbackSort
 * @param options
 */
export declare function createSortCallback(options?: ICreateSortCallbackOptions): IFnSortCallback;
