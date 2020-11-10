import { CarouserApi, ArticalAll, jsListAll } from "../../api/index";

export let carouserAction = (currentPage:number, pageSize: number) =>{
    return async (dispath: Function) => {
        let data = await CarouserApi(currentPage, pageSize)
        if (data) {
            dispath({
                type:'CAROURSE',
                payload: data.data
            }) 
        }
    }
}
export const ArticalAction = (currentPage:number, pageSize: number) =>{
    return async (dispath: Function) => {
        let data = await ArticalAll(currentPage,pageSize)
        if (data) {
            dispath({
                type: 'ARTICALLIST',
                payload: data.data
            })
        }
    }
}
export const JcListAction = () =>{
    return async (dispath: Function) =>{
        let data = await jsListAll()
        if (data) {
            dispath({
                type:'JCLIST',
                payload:data.data
            })
        }
    }
}