import React from "react";
import Search from "./Search";
class Parent extends React.Component{
    state = {
        title: '父组件传值'
    }
    render(){
        return(
            <div>父组件
                <Search />
            </div>
            
        )
    }
}
export default Parent