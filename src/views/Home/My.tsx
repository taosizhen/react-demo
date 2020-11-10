import * as React from 'react';
import styles from './My.module.less'
import ListMap from "../../components/ListMap";
const My: React.FC = () => {
    let tableList = [
        {
            name:'浏览历史',
            value:'21'
        },
        {
            name:'收藏关注',
            value:'9'
        },
        {
            name: '联系人',
            value: '1'
        },
        {
            name: '钱包优惠',
            value: '0'
        }
    ]
    let tableData = [
        {
            name:'福利专区',
            icon:'icon-Notification_2'
        },
        {
            name:'专家',
            icon:'icon-Support_Male'
        },
        {
            name: '保障',
            icon: 'icon-Sale'
        },
        {
            name: '签到',
            icon: 'icon-Tap'
        },
        {
            name: '会员',
            icon: 'icon-Package_received'
        }
    ]
    const listData = [
        {
            name:'房产工具',
            children:[
                {
                    name: '看房管理',
                    icon: 'icon-Ballance'
                },
                {
                    name: '买卖出价',
                    icon: 'icon-Nfc'
                },
                {
                    name: '查房价',
                    icon: 'icon-POS_3'
                },
                {
                    name: '房贷计算',
                    icon: 'icon-Calculator_2'
                },
                {
                    name: '税费计算',
                    icon: 'icon-Calculator'
                },
                {
                    name: '买房攻略',
                    icon: 'icon-Products_in_basket'
                },
                {
                    name: '我的点评',
                    icon: 'icon-Task'
                },
                {
                    name: '我的问答',
                    icon: 'icon-certificate'
                },
                {
                    name: '我的贴子',
                    icon: 'icon-pinglun'
                }
            ]
        },
        {
            name:'业主服务',
            children:[
                {
                    name:'房屋估价',
                    icon:'icon-Stocks'
                },
                {
                    name: '租房管理',
                    icon: 'icon-fangdichan3'
                },
                {
                    name: '买房管理',
                    icon: 'icon-fangdichan4'
                },
                {
                    name: '商铺写字楼',
                    icon: 'icon-fangdichan1'

                }
            ]
        }
    ]
    const listTav =[
        {
            name:'问卷调查'
        },
        {
            name:'举报中心'
        },
        {
            name:'在线客服'
        },
        {
            name:'安居客公众号'
        },
        {
            name:'快狗打车'
        },
        {
            name:'58同城'
        },
        {
            name:'免流量服务'
        }
    ]
    return (
        <div className={styles.my_container}>
            <div className={styles.header}></div>
            <div className={styles.userBox}>
                <ul className={styles.userBoxFirst}>
                    <li>
                        <div className={styles.imgs}></div>
                    </li>
                    <li>
                        <p>陶四臻</p>
                        <p>1v1会员</p>
                        <p>升级还需400经验</p>
                    </li>
                    <li className={styles.btn}>
                        <div>个人主页<span className="iconfont icon-icon_richeng_arrow_right"></span></div>
                    </li>
                </ul>
                <ul className={styles.list}>
                    {
                        tableList.map(item => {
                            return (
                                <li key={item.name}>
                                    <p>{item.value}</p>
                                    <p>{item.name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <ListMap TableData={tableData}></ListMap>
                
            </div>
            <div className={styles.listTap}>
                <ListMap TableData={listData}></ListMap>
            </div>
            <div className={styles.listTac}>
                <ul>
                    {
                        listTav.map(item => {
                            return (
                                <li key={item.name}><div>{item.name}</div><div className="iconfont icon-icon_richeng_arrow_right"></div></li>
                            )
                        })
                    }
                </ul>
                
            </div>
        </div>
    )
}
export default My