import React from "react";
import { Menu } from "antd";
import {
    PieChartOutlined,
    AppstoreOutlined,
    MenuUnfoldOutlined
} from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import "./leftNav.css";
class LeftNavigation extends React.Component {
    state = {
        collapsed: false
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    render() {
        return (
            <div className="leftNav">
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <NavLink to='/home'>
                            首页
                         </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<AppstoreOutlined />}>
                        <Link to='/notFund'>
                            首页
                         </Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<MenuUnfoldOutlined />}>
                        <Link to='/home'>
                            首页
                         </Link>
                    </Menu.Item>
                </Menu>
            </div>

        )
    }
}
export default LeftNavigation