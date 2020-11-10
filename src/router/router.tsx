import { HashRouter } from "react-router-dom";
import * as React from 'react';
import routerConfig from './routerConfig';
import RouterView from './routerView'
const Router: React.FC = () =>{
    return(
        <HashRouter>
            <RouterView routers={routerConfig.routers}></RouterView>
        </HashRouter>
    )
}
export default Router