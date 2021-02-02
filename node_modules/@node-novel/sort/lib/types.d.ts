/**
 * Created by user on 2020/6/5.
 */
export declare enum EnumToLowerCase {
    toLowerCase = 1,
    toLocaleLowerCase = 2
}
export interface IFnSortCallback {
    (a: string, b: string, isSub?: boolean): number;
    failbackSort(a: any, b: any): number;
    trigger(a: string, b: string, data: ITriggerData): number;
    transpile(input: any, isSub?: any, ...argv: any[]): string;
    transpileBase(input: any, isSub?: any, ...argv: any[]): string;
    fnSortCallback(a: string, b: string, isSub?: boolean): number;
}
export declare type ICreateSortCallbackOptions = {
    dotNum?: boolean;
    /**
     * will change base input value
     */
    toLowerCase?: EnumToLowerCase | boolean | ((input: any, isSub?: any, ...argv: any[]) => string);
} & IFnSortCallbackProp;
export interface IFnSortCallbackProp {
    /**
     * failback compare
     */
    failbackSort?(a: any, b: any): number;
    /**
     * compare transpile value
     */
    trigger?(a: string, b: string, data: ITriggerData): number;
    /**
     * will change input value for trigger only
     */
    transpile?(input: any, isSub?: any, ...argv: any[]): string;
    /**
     * will change base input value
     */
    transpileBase?(input: any, isSub?: any, ...argv: any[]): string;
}
export interface ITriggerData {
    r: RegExp;
    mainFn: IFnSortCallback;
    isSub: boolean;
}
