import React,{ useEffect, useState,useRef, createRef } from "react";
import styles from './ArticalList.module.less'
import { ArticalAction } from "../store/action/home";
import { connect } from "react-redux";
import { ListView, PullToRefresh } from "antd-mobile";
interface dispathType {
    init: (currentPage: number,pageSize: number) => void
}
interface tableListType{
    name: string
    grey: string
    money: string
    moneyver: string
    mtcon: string
    advCtx:string
    url: string
}
interface stateType{
    tableList: tableListType[]
}
const ArticalList: React.FC<dispathType & stateType> = (props)=>{
    let [hasMore] = useState(false)
    let [currentPage, setCurrentPage] = useState(1)
    let listDataSource = new ListView.DataSource({
        rowHasChanged: (row1: any, row2: any) => row1 !== row2,
    })
    let lv = useRef(null)
    const dataSource = useRef(listDataSource)
    const orgList = useRef(listDataSource)
    let [isLoading,setIsloading] = useState(false)
    useEffect(() => {
        setIsloading(true)
        if (!props.tableList) {
            props.init(currentPage, 20)
            setIsloading(true)
            return
        }
        if (currentPage === 1) {
            dataSource.current = dataSource.current.cloneWithRows(props.tableList)
            orgList.current = props.tableList
        }else{
            dataSource.current = dataSource.current.cloneWithRows([...orgList.current,...props.tableList])
            orgList.current = [...orgList.current, ...props.tableList]
        }
        setIsloading(false)
        
    },[props,currentPage])
    const row = (item: tableListType)=>{
        return (
            <div className={styles.articalListItem} key={item.url}>
                <div className={styles.left}>
                    <img src={item.url ? item.url : ''} alt="#" />
                </div>
                <div className={styles.right}>
                    <div className={styles.title}>{item.name}</div>
                    <div className={styles.address}>
                        <span>{item.moneyver}</span>
                        <span>{item.grey}</span>
                    </div>
                    <div className={styles.money}>
                        {item.money}
                    </div>
                    <div>
                        <span>{item.grey}</span>
                        <span>{item.mtcon}</span>
                        <span>{item.moneyver}</span>
                    </div>
                    <div>
                        <span>{item.advCtx}</span>
                    </div>
                </div>
            </div>
        ) 
    }
    const onEndReached = (event:any) => {
        // load new data
        debugger
        // hasMore: from backend data, indicates whether it is the last page, here is false
        console.log(77, isLoading, hasMore);
        
        if (isLoading && !hasMore) {
            return;
        }
        console.log('reach end', event);
        setCurrentPage(currentPage++)
    }
    return (
        <ListView
            ref={lv}
            dataSource={dataSource.current}
            renderFooter={() => (<div className={styles.loading}>
                {isLoading ? '加载中...' : '加载更多'}
            </div>)}
            renderRow={row}
            initialListSize={10}
            className={styles.articalList}
            onContentSizeChange={(contentWidth, contentHeight) => { console.log('scroll');}}
            pageSize={1}
            useBodyScroll
            scrollEventThrottle={50}
            onScroll={() => { console.log('scroll'); }}
            onEndReached={onEndReached}
            onEndReachedThreshold={50}
        />
    )
}
const mapStateToProp = (state:any)=>{
    return {
        tableList: state.home.ArticalList
    }
}
const mapDispathToProps =(dispath:Function) =>{
    return {
        init: (currentPage:number,pageSize:number)=>{
            dispath(ArticalAction(currentPage,pageSize))
        }
    }
}
export default connect(mapStateToProp, mapDispathToProps)(ArticalList)