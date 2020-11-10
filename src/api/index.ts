/*
 * @Author: your name
 * @Date: 2020-08-16 23:09:19
 * @LastEditTime: 2020-10-07 16:30:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tsreact\src\api\index.ts
 */
import axios from "../util/request";
export const CarouserApi = (currentPage: number, pageSize: number) => {
    return axios.get('/home/search', {
        params: {
            currentPage,
            pageSize
        }
    })
}
export const ArticalAll = (currentPage:number, pageSize:number) =>{
    return axios.get('/home/artical/searchAll',{
        params:{
            currentPage,
            pageSize
        }
    })
}
export const jsListAll = () =>{
    return axios.get('/home/tjlist/searchAll',{})
}