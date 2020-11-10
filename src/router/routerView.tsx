import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { routerConfigType } from "../util/interface";
import { getToken } from '../util/index';
const RouterView: React.FC<routerConfigType> = (props) => {
    let arr = props.routers
    let routerArr = arr.filter(item => !item.to)
    let redirectArr = arr.filter(item => item.to).map(item => { return <Redirect path={item.path} to={`${item.to}`} key={item.path}></Redirect>})
    return (
        <Switch>
            {
                routerArr.map(element => {
                    return (
                        <Route
                            path={element.path}
                            render={
                                (prop) => {
                                    let { match: { path } } = prop;
                                    if (path !== '/login' && path !== '/home' && !getToken()) {
                                        return <Redirect to={`/login?redirect=${encodeURIComponent(path)}`} />
                                    }
                                    return <element.component routers={element.children} {...prop} key={element.path}></element.component>
                                }} key={element.path}>
                        </Route>
                    )
                }).concat(redirectArr)
            }
        </Switch >
    )
}
export default RouterView