import { StringifyOptions } from "querystring";

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
    master: Master;
    home: Home;
    signIn: SignIn;
    setting: Setting;
}
/** UI **/
export interface Master{
    isMessageVisiable: boolean;
    message: Message;
    path?: string;
}
export interface Message{
    type: MessageType;
    intlId: string;
    content?: string;
}
export interface Home{
}
export interface SignIn{
    isValid: boolean;
}
export interface Setting{
    lang: string;
}
export const enum MessageType{
    Success,
    Error,
    Info,
    Warning,
    Loading
}