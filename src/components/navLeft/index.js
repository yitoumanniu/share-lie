import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'


const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item


export default class NavLeft extends Component {
    render() {
        return (
            <div className='nav-left'>
                <Menu theme='dark' mode='vertical' style={{ height: 1100 }}>
                    <MenuItem key='/首页'>
                        <Link to='/admin/home'>首页</Link>
                    </MenuItem>
                    <SubMenu
                        title='订单管理'
                    >
                        <MenuItem key='/admin/order'>
                            <Link to='/admin/order'>订单管理</Link>
                        </MenuItem>
                        <MenuItem key='/admin/order_demo'>
                            <Link to='/admin/order_demo'>订单管理demo</Link>
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title='图例'>
                        <MenuItem>
                            <Link to='/admin/echarts/bar'>
                                条形图
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/admin/echarts/pie'>
                                饼状图
                            </Link>
                        </MenuItem>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}