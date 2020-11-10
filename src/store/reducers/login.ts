/*
 * @Author: your name
 * @Date: 2020-09-20 13:06:27
 * @LastEditTime: 2020-09-24 22:27:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \title\tsreact\src\store\reducers\login.ts
 */
import { actionType } from "../../util/interface";
import { setToken,removeToken } from "../../util/index";
const initVal = {
    isLogin: false
}
let loginReducer = (state:any,action:actionType)=>{
    switch (action.type) {
        case 'LOGIN':            
            setToken(action.payload.sessionKey)
            return {...state,isLogin: !!action.payload.sessionKey}
        case 'LOGOUT':
            removeToken()
            return {...state,isLogin: false}
        default:
            return state
    }

}
export default (state = initVal,action: actionType)=> loginReducer(state,action)