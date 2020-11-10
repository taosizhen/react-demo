/*
 * @Author: your name
 * @Date: 2020-09-20 13:01:43
 * @LastEditTime: 2020-10-11 22:36:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \title\tsreact\src\store\reducers\home.ts
 */
import {actionType} from '../../util/interface'
let homeReducer = (state: any, action: actionType) =>{
    switch (action.type) {
        case 'CAROURSE':
            return { ...state,carouserData:action.payload}
        case 'ARTICALLIST':
            return { ...state, ArticalList: action.payload}
        case 'JCLIST':
            return { ...state, jclist: action.payload}
        default:
            return state
    }
}
export default (state = [],action:actionType)=>{return homeReducer(state,action)}