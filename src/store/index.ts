/*
 * @Author: your name
 * @Date: 2020-09-20 12:48:58
 * @LastEditTime: 2020-09-20 13:09:08
 * @LastEditors: Please set LastEditors
 * @Description: redux
 * @FilePath: \title\store\index.ts
 */
import { createStore,applyMiddleware,combineReducers } from "redux";
import ReduxLogger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

import home from './reducers/home'
import login from './reducers/login'

let reducers = combineReducers({
    home,
    login
})
let store = createStore(reducers,applyMiddleware(ReduxLogger,ReduxThunk))
export default store