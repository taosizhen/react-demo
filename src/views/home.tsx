import React, { useState } from 'react'
import RouterView from "../router/routerView";
import { TabBar } from 'antd-mobile';
import styles from './Home.module.less'
import { routerConfigTypeItem } from '../util/interface'
interface propType {
    routers: []
}
interface stateType {
    hidden: boolean
}
const Home: React.FC<propType & stateType & routerConfigTypeItem> = (props) => {
    let [hidden, setHidden] = useState(false)
    let [selectedTab, setSeletedTab] = useState('/home/index')
    return (
        <div className={styles.Home}>
            <TabBar
                unselectedTintColor="#565a59"
                tintColor="#21c894"
                barTintColor="white"
                tabBarPosition="bottom"
                hidden={hidden}
            >
                <TabBar.Item
                    title="首页"
                    key="Life"
                    icon={<span className="iconfont icon-weibiaoti-" style={{
                        color: '#565a59'
                    }} />
                    }
                    selectedIcon={<span className="iconfont icon-weibiaoti-" style={{
                        color: '#21c894'
                    }}
                    />
                    }
                    selected={selectedTab === '/home/index'}
                    onPress={() => {
                        props.history.push('/home/index')
                        setSeletedTab('/home/index')
                    }}
                    data-seed="logId"
                >
                    <div className="main">
                        <RouterView routers={props.routers}></RouterView>
                    </div>
                </TabBar.Item>

                <TabBar.Item
                    icon={
                        <span className="iconfont icon-chuangjianzhibiao" style={{
                            color: '#565a59'
                        }}
                        />
                    }
                    selectedIcon={
                        <span className="iconfont icon-chuangjianzhibiao" style={{
                            color: '#21c894'
                        }}
                        />
                    }
                    title="消息"
                    key="Koubei"
                    selected={selectedTab === '/home/subject'}
                    onPress={() => {
                        props.history.push('/home/subject')
                        setSeletedTab('/home/subject')
                    }}
                    data-seed="logId1"
                >
                    <div className="main">
                        <RouterView routers={props.routers}></RouterView>
                    </div>
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <span className="iconfont icon-caidanguanli" style={{
                            color: '#565a59'
                        }}
                        />
                    }
                    selectedIcon={
                        <span className="iconfont icon-caidanguanli" style={{
                            color: '#21c894'
                        }}
                        />
                    }
                    title="有料"
                    key="Friend"
                    dot
                    selected={selectedTab === '/home/classify'}
                    onPress={() => {
                        props.history.push('/home/classify')
                        setSeletedTab('/home/classify')
                    }}
                >
                    <div className="main">
                        <RouterView routers={props.routers}></RouterView>
                    </div>
                </TabBar.Item>
                <TabBar.Item
                    icon={<span className="iconfont icon-gouwuche-" style={{
                        color: '#565a59'
                    }}></span>}
                    selectedIcon={
                        <span className="iconfont icon-gouwuche-" style={{
                            color: '#21c894'
                        }}></span>
                    }
                    title="推荐"
                    key="my"
                    selected={selectedTab === '/home/cart'}
                    onPress={() => {
                        props.history.push('/home/cart')
                        setSeletedTab('/home/cart')
                    }}
                >
                    <div className="main">
                        <RouterView routers={props.routers}></RouterView>
                    </div>
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <span className="iconfont icon-wode-" style={{
                            color: '#565a59'
                        }}></span>
                    }
                    selectedIcon={
                        <span className="iconfont icon-wode-" style={{
                            color: '#21c894'
                        }}></span>
                    }
                    title="我的"
                    key="my"
                    selected={selectedTab === '/home/my'}
                    onPress={() => {
                        props.history.push('/home/my')
                        setSeletedTab('/home/my')
                    }}
                >
                    <div className="main">
                        <RouterView routers={props.routers}></RouterView>
                    </div>
                </TabBar.Item>
            </TabBar>
        </div>
    )
}
export default Home