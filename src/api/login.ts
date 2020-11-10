/*
 * @Author: tzz
 * @Date: 2020-09-20 14:05:38
 * @LastEditTime: 2020-09-22 00:16:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \title\tsreact\src\api\login.ts
 */
import Qs from "qs";
import axios from "../util/request";
export let login = (name: string, phone: string, passward: string) => {
    return axios.post('/auth/login',
        Qs.stringify({
            name,
            phone,
            passward
        })
    )
}