import React, { useEffect, useRef, useState } from 'react'
import { ListView } from 'antd-mobile';
import { connect } from "react-redux";
import { JcListAction } from "../store/action/home";
interface listType {
    id: string;
    title: string;
    qa_answer: string;
    poly_full: string;
    time: string
}
interface stateType {
    jsList: listType[]
}
interface dispathType {
    jsFetch: () => void
}
const JcList: React.FC<stateType & dispathType> = (props) => {
    const lv = useRef(null)
    const [isLoading] = useState(false)
    let listDataSource = new ListView.DataSource({
        rowHasChanged: (row1: any, row2: any) => true
    })
    let dataSource = useRef(listDataSource)
    useEffect(() => {
        let promise = new Promise((resolve, reject) => {
            if (!props.jsList) {
                props.jsFetch()
            } else {
                resolve(true)
            }
        })
        promise.then((data: any) => {
            if (data) {
                dataSource.current = dataSource.current.cloneWithRows(props.jsList)  
            }
        })
    }, [props])
    const row = (item: listType) => {
        return (
            <div key={item.id}
                style={{
                    padding: '0 15px',
                    backgroundColor: 'white',
                    textAlign:'left',
                }}
            >
                <div style={{ lineHeight: '20px', color: '#888', fontSize: '18px', borderBottom: '1px solid #ddd' }}>
                    {item.title}
                </div>
                <div style={{ display: 'flex', padding: '15px' }}>
                    <div style={{ display: 'inline-block' }}>
                        <div style={{ fontSize: '16px' }}><span style={{ fontSize: '18px', color: '#FF6E27' }}>{item.qa_answer}</span></div>
                        <div style={{ marginBottom: '8px', color: '#000', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '250px' }}>{item.poly_full}-{item.time}</div>
                    </div>
                </div>
            </div>
        );
    };
    const onEndReached = () => {

    }
    return (
        <div>
            <ListView
                ref={lv}
                dataSource={dataSource.current}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                initialListSize={0}
                renderRow={row}
                pageSize={4}
                useBodyScroll
                onScroll={() => { console.log('scroll'); }}
                scrollRenderAheadDistance={500}
            />
            {dataSource.current?JSON.stringify(dataSource.current):''}
        </div>
        
    )
}
const mapSateToProp = (state: any) => {
    return {
        jsList: state.home.jclist
    }
}
const mapDispathToProps = (dispath: Function) => {
    return {
        jsFetch: () => {
            dispath(JcListAction())
        }
    }
}
export default connect(mapSateToProp, mapDispathToProps)(JcList)