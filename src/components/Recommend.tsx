import React from "react";
import styles from "./Recommend.module.less";
import Icon from "./icon";
const Recommend: React.FC = ()=>{
    const tableData = [
        {
            title:'官方旗舰店',
            subtitle:'安心挑好房',
            icon:'icon-Gold'
        },
        {
            title: '楼盘热点',
            subtitle: '热门点评榜',
            icon: 'icon-Money_Bag'
        },
        {
            title: '碧桂园挑房节',
            subtitle: '金秋88折起',
            icon: 'icon-Secure_Payments'
        },
        {
            title: '新盘抢先',
            subtitle: '新盘在建中...',
            icon: 'icon-POS_2'
        }
    ]
    return (
        <div className={styles.recommend}>
            {
                tableData.map(item =>{
                    return (
                        <ul key={item.title}>
                            <li className={styles.recommendLeft}>
                                <div>{item.title}</div>
                                <div>{item.subtitle}</div>
                            </li>
                            <li className={styles.recommendRight}>
                                <Icon width="2rem" height="2rem" type={item.icon}></Icon>
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}
export default Recommend