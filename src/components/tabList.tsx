import React, { useEffect } from 'react'
import { Tabs } from "antd-mobile";
import styles from './TabList.module.less'
import JclistItem from './JcList'
interface tabType{
    title: string;
    sub: string;
}
interface dispathType {
    jsList: stateType[]
    id: string;
    title: string;
    qaAnswer: string;
    polyFull: string;
    time: string
}
interface propsType {
    tabData: tabType[]
}
interface stateType {
    id: string;
    title: string;
    qaAnswer: string;
    polyFull: string;
    time: string
}

const TabList: React.FC<propsType> = (props) =>{
    return (
        <div className={styles.container}>
            <Tabs
                tabs={props.tabData}
                tabBarActiveTextColor="#21c894"
                tabBarInactiveTextColor="#ddd"
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                renderTab={tab => 
                    <div className={styles.tabList}>
                        <div>
                            {tab.title}
                        </div>
                        <div>{tab.sub}</div>
                    </div>
                }
                initialPage={0}>
                <div>
                    <JclistItem></JclistItem>
                </div>
                <div>
                    tabl2
                </div>
                <div>
                    tabl3
                </div>
            </Tabs>
        </div>
    )
}

export default TabList