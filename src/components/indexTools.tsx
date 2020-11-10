import React from "react";
import styles from "./IndexTools.module.less";
import Icon from "./icon";
const IndexTools : React.FC = () =>{
    const tableData = [
        {
            name:'问卷回答',
            icon:'icon-Old_School_Phone'
        },
        {
            name:'购房百科',
            icon:'icon-bijiben'
        },
        {
            name:'房贷计算',
            icon:'icon-Calculator_2'
        },
        {
            name:'出租',
            icon: 'icon-Delivery_2'
        },
        {
            name:'卖房',
            icon: 'icon-Receiving_money_1_'
        }
    ]
    return(
        <div className={styles.indexTools}>
            {
                tableData.map(item =>{
                    return (
                        <ul className={styles.indexToolItem} key={item.name}>
                            <li>
                                <Icon height="2em" width="2em" type={item.icon}></Icon>
                            </li>
                            <li>{item.name}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}
export default IndexTools