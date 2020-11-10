/*
 * @Author: your name
 * @Date: 2020-09-20 13:46:33
 * @LastEditTime: 2020-09-22 00:33:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \title\tsreact\src\store\action\login.ts
 */
import {login} from "../../api/login";
export let loginAction = (name:string,passward:string,phone:string)=>{
    return async (dispath: Function) => {       
        let data = await login(name,passward,phone)
        if (data) {
            dispath({
                type:'LOGIN',
                payload:data
            })
        }
    }   
}
export let logoutAction = () => {
    return ({
        type: 'LOGINOUT'
    })
}
