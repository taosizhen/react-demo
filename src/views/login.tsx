import React, { useState } from 'react';
import { List, InputItem, Card, Toast, Button } from 'antd-mobile';
import { loginType } from '../util/interface'
import { connect } from "react-redux";
import { RouteComponentProps } from 'react-router'
import { phoneReg, passwordReg } from "../util/regexp";
import { loginAction } from "../store/action/login";
import Styles from "./Login.module.less";
interface DispatchType{
    login:(name:string,passward:string,phone:string)=> void
}
interface isLoginType {
    isLogin: boolean
}
const Login: React.FC<isLoginType & loginType & RouteComponentProps & DispatchType> = (props) => {
    let [phone, setPhone] = useState('13921407205')
    let [name, setName] = useState('zhangsan')
    let [passward, setPassward] = useState('111asd')
    
    if (props.isLogin) {
        console.log(props.isLogin, "isLogin------")
        let redirect = props.location.search.slice(1).split('=')[1]
        // console.log(props,"props-----------")
        console.log(decodeURIComponent(redirect), "--------------")
        props.history.replace(redirect ? decodeURIComponent(redirect) : '/')
        return null;
    }
    let login = () => {     
        if (!phoneReg.test(phone)) {
            Toast.info('请输入正确的手机号')
            return
        }
        if (!passwordReg.test(passward)) {
            Toast.info('请输入正确的密码')
            return
        }
        props.login(name, passward, phone)
        
    }
    let changeName = (value: any) => {
        setName(value)
    }
    let changePhone = (value: any) => {
        setPhone(value)
    }
    let changePassward = (value: any) => {
        setPassward(value)
    }
    return (
        <div className={Styles.login}>
            <div className={Styles.loginList}>
                <div className={Styles.headers}>欢迎登录</div>
                <Card>
                    <List>
                        <InputItem
                            value={name}
                            type="text"
                            onChange={changeName}
                            placeholder="请输入用户名"
                        >用户名</InputItem>
                        <InputItem
                            value={phone}
                            type="number"
                            onChange={changePhone}
                            placeholder="请输入正确的手机号"
                        >手机号码</InputItem>
                        <InputItem
                            value={passward}
                            type="password"
                            onChange={changePassward}
                            placeholder="****"
                        >密码</InputItem>

                    </List>
                </Card>
                <div className={Styles.loginBtn}>
                    <Button type="primary" onClick={login}>登录</Button>
                </div>
            </div>
        </div>
    )

}
const mapStateToProp = (state: any) => {
    return {
        isLogin: state.login.isLogin
    }
}
const mapDispathToprops = (dispatch: Function) => {
    return {
        login: (name: string, passward: string, phone: string) => {
            dispatch(loginAction(name, passward, phone))
        }
    }
}
export default connect(mapStateToProp, mapDispathToprops)(Login)