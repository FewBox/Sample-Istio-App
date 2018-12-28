/** Common **/
export interface List<T>{
    items: T[]
}
export interface Paging<T>{
    items: T[];
    itemCount: number;
    pageCount: number;
    pageRange: number;
    pageIndex: number;
}
/** Root **/
export interface Store{
    home: Home;
    setting: Setting;
}
/** Page **/
export interface Home{
}
export interface Setting{
    lang: string;
}
/** Entity **/
/** Util **/
export interface Common{
    isLoadingVisiable: boolean;
    isMessageVisiable: boolean;
    message: string
}
/** Component **/
export const enum ViewType{
    Small,
    Large
}