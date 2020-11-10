export interface routerConfigType {
    routers: configItemType[] 
}
export interface routerConfigTypeItem {
    routers: configItemType[]
    history: { push: Function }
}
export interface configItemType {
    path: string;
    component: Function;
    children?:configItemType;
    to?:string
}
export interface actionType{
    type:string;
    payload: any
}
export interface loginType{
    name:string;
    passward: string;
    phone: string;
}