/*
 * @Author: your name
 * @Date: 2020-08-16 23:00:17
 * @LastEditTime: 2020-09-28 23:41:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tsreact\src\util\http.ts
 */
import Axios from "axios";
import { getToken } from "./index";
import { Toast } from "antd-mobile";
const httpAxios = Axios.create({
    baseURL:'http://127.0.0.1:7001',
    timeout:10000
})
httpAxios.interceptors.request.use((config)=>{
    if (getToken()) {
        config.headers['x-nideshop-token'] = getToken();
    }
    return config
},(error)=>{
    Toast.info(error.toString())
    return Promise.resolve()
})
httpAxios.interceptors.response.use((response)=>{
    if (response.status !== 200 || (response.data.errno && response.data.code !== 1)) {
        Toast.info(response.data.errmsg);
        return Promise.resolve()
    }else{
        return response.data
    }
},(error)=>{
    Toast.info(error.toString())
    return Promise.resolve(error)
})
export default httpAxios