import React,{ useState } from 'react';
import Icon from '../../components/icon';
import styles from './index.module.less'
import Carouser from '../../components/Carouser'
import IndexTools from "../../components/indexTools";
import Recommend from "../../components/Recommend";
import ArticalList from "../../components/ArticalList";
import { SearchBar } from "antd-mobile";
interface stateType {
    width: string;
    height:string;
    value:string;
}
interface breadType {
    name:string;
    className: string;
    type: string;
}
const Index: React.FC<stateType & breadType> = () => {
    let [position,setPosition] = useState('北京')
    let [searchValue,setSearchValue] = useState('')
    let breadCardList = [
        {
            name: '新房',
            className: 'icon-fangdichan3',
            type:'newhose'
        },
        {
            name: '二手房',
            className: 'icon-fangdichan4',
            type: 'newhose1'
        },
        {
            name: '租房',
            className: 'icon-fangdichan2',
            type: 'newhose2'
        },
        {
            name: '商铺写字楼',
            className: 'icon-fangdichan1',
            type: 'newhose3'
        },
        {
            name: '我是业主',
            className: 'icon-notice-color',
            type: 'master'
        },
        {
            name: '装修材料',
            className: 'icon-12',
            type: 'zxcl'
        },
        {
            name: '查房价',
            className: 'icon-suozaijigou',
            type: 'cfj'
        },
        {
            name: '找小区',
            className: 'icon-menhuguanli',
            type: 'zxq'
        },
        {
            name: '海外小区',
            className: 'icon-plane-color',
            type: 'zxq'
        },
        {
            name: '免费看房',
            className: 'icon-POS_2',
            type: 'zxq'
        }
    ]
    const cityPriceData = [
        {
            price:'28854元/㎡',
            title:'二手房',
            icon: 'icon-arrow-down-filling',
            colors:'#fa4d0a',
            updata:'0.4%'
        },
        {
            price: '27181元/㎡',
            title: '新房',
            colors: '#3cb950',
            icon: 'icon-arrow-up-filling',
            updata: '1.49%'
        }
    ]
    const changeInput = (val:string)=>{
        console.log(val); 
    }
    return (
        <div className={styles.homeIndex}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <span className="iconfont icon-arrow-down-filling"></span>
                    <span>{position}</span>
                </div>
                <div className={styles.headerMiddle}>
                    <SearchBar placeholder="请搜索" onChange={changeInput} value={searchValue} />
                </div>
                <div className={styles.headerRight}>
                    <Icon type="icon-Map_2" width="1em" height="1em"></Icon>
                    <span>地图</span>
                </div>
            </div>
            <div className={styles.breadCard}>
                {
                    breadCardList.map((element:breadType) => {
                        return (
                            <div key={element.name} className={styles.breadList}>
                                <Icon type={element.className} width="2em" height="2em"></Icon>
                                <span className={styles.title}>{element.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.carouser}>
                <Carouser></Carouser>
            </div>
            <div className={styles.cityPrice}>
                <div className={styles.cityPriceLeft}>
                    <p>南京房价</p>
                    <p>城市行情</p>
                </div>
                <div className={styles.cityPriceMiddle}>
                    {
                        cityPriceData.map(item =>{
                            return (
                                <div className={styles.cityPriceMiddleItem} key={item.title}>
                                    <p>{item.price}</p>
                                    <p>
                                        <span>{item.title}</span>
                                        <span className={'iconfont ' + item.icon} style={{ 'color': `${item.colors}`}}></span>
                                        <span>{item.updata}</span>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.cityPriceRight}>
                    <span className="iconfont icon-arrow-right-bold"></span>
                </div>
                <div>
                    <IndexTools></IndexTools>
                </div>
                <div>
                    <Recommend></Recommend>
                </div>
                <div>
                    <ArticalList></ArticalList>
                </div>
            </div>
        </div>
    )
}
export default Index