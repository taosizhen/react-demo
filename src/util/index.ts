/*
 * @Author: your name
 * @Date: 2020-09-20 13:23:16
 * @LastEditTime: 2020-09-20 13:34:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \title\tsreact\src\util\index.ts
 */
import Cookie from 'js-cookie'
const key = 'x-nideshop-token'
export let setToken = (val:string)=>{
    return Cookie.set(key,val)
}
export let getToken = ()=>{
    return Cookie.get(key)
}
export let removeToken =()=>{
    return Cookie.remove(key)
}