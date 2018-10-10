import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'antd'


const SubMenu  = Menu.SubMenu
const MenuItem = Menu.Item 


export default class NavLeft extends Component {
    render() {
       return(
           <div className='nav-left'>
              <Menu theme='dark' mode='vertical' style={{height:1100}}>
                    <MenuItem key='/首页'>
                        <Link to='/admin/home'>首页</Link>
                    </MenuItem>
                    <MenuItem key='/第二页'>
                        <Link to='/admin/SecondPage'>第二页</Link>
                    </MenuItem>
              </Menu>
           </div>
       )
    }
}