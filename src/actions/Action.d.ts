interface BaseAction{
    type: string;
}
export interface MetaAction<T> extends BaseAction{
    meta: T;
}
export interface PayloadAction<T> extends BaseAction{
    payload: T;
}
export interface EmptyAction extends BaseAction{
}