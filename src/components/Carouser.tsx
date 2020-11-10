import React, { useEffect } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import styles from './Carouser.module.less'
import { carouserAction } from "../store/action/home";
import { connect } from "react-redux";
interface carouserType {
    carouserData: carouserInfo[]
}
interface carouserInfo{
    type: string
    info:string
    id: string
}
interface dispatchType {
    carouserFetch: (currentPage: number, pageSize: number) => void
}
const Carouser: React.FC<carouserType & dispatchType> = (props) => {
    useEffect(()=>{
        props.carouserFetch(1, 10)
    },[])
    return (
        <div className={styles.carouser}>
            <div className={styles.carouserLeft}>
                安居客优先
            </div>
            <div className={styles.carouserRight}>
                <WingBlank>
                    <Carousel
                        vertical
                        dots={false}
                        autoplay={true}
                        infinite
                    >
                        {props.carouserData && props.carouserData.map(item => {
                            return (
                                <div className={styles.vItem} key={item.id}>
                                    <span>{JSON.parse(item.info).loupan_name}</span>
                                    <img src={JSON.parse(item.info).default_image ? JSON.parse(item.info).default_image : ''} alt="" />
                                </div>
                            )
                        })
                        }
                    </Carousel>
                </WingBlank>
            </div>
        </div>
    )
}
const mapStateToProp = (state: any) => {
    return {
        carouserData: state.home.carouserData
    }
}
const mapDispathToprops = (dispatch: Function) => {
    return {
        carouserFetch: (currentPage: number, pageSize: number) => {
            dispatch(carouserAction(currentPage, pageSize))
        }
    }
}
export default connect(mapStateToProp, mapDispathToprops)(Carouser)