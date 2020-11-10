import React from 'react'
import Icon from "./icon";
import styles from './ListMap.module.less'
interface listType {
    icon?:string
    name:string
    children?:listType[]
}
interface stateType {
    TableData: listType[]
}
const ListMap: React.FC<stateType>=(props)=>{
    return(
        <ul className={styles.list_map}>
            {
                props.TableData.map(item=>{
                    if (item.icon) {
                        return (
                            <li key={item.name}>
                                <Icon type={item.icon} width="30" height="30"></Icon>
                                <p>{item.name}</p>
                            </li>
                        )
                    }else{
                        if (item.children) {
                            return (
                                <li key={item.name}>
                                    <p>{item.name}</p>
                                    <ListMap TableData={item.children}></ListMap>
                                </li>
                            ) 
                        }else{
                            return (
                                <li key={item.name}>
                                    <p>{item.name}</p>
                                </li>
                            ) 
                        }
                       
                    }
                })
            }
        </ul>
    )   
}
export default ListMap