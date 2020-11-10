import * as React from 'react';
import TabList from '../../components/tabList'
import styles from "./Classify.module.less";
const Classify: React.FC = () => {
    const tabData = [
        {
            title:'推荐',
            sub:'猜你喜欢'
        },
        {
            title: '关注',
            sub: '最新动态'
        },
        {
            title: '头条',
            sub: '楼市热讯'
        },
        {
            title: '问答',
            sub: '买房热问'
        },
        {
            title: '挑好房',
            sub: '帮你找房'
        },
        {
            title: '房友圈',
            sub: '买房交流'
        },
        {
            title: '本地',
            sub: '城市新鲜事'
        },
        {
            title: '房价',
            sub: '行情数据'
        },
        {
            title: '律师在线',
            sub: '学点法律'
        },
        {
            title: '户型改造',
            sub: '让生活更美好'
        },
        {
            title: '商业地产',
            sub: '商铺写字楼'
        },
        {
            title: '海外',
            sub: '海外百科'
        },
        {
            title: '租房',
            sub: '租房指南'
        },
        {
            title: '活动',
            sub: '安居客市场部'
        }
    ]
    return (
        <div className={styles.container}>
            <TabList tabData={tabData}></TabList>
        </div>
    )
}
export default Classify