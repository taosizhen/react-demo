/*
 * @Author: your name
 * @Date: 2020-08-16 22:52:06
 * @LastEditTime: 2020-09-21 23:34:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tsreact\src\setupProxy.ts
 */
const proxy = require('http-proxy-middleware');
module.exports = function (app:any) {
   app.use(
       'api',
       proxy({
           target:'http://127.0.0.1:7001',
           changeOrigin:true
       })
   ) 
}