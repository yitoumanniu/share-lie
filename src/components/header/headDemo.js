import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import './headDemo.less'

export default class HeadDemo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='header-demo-wrap'>
                <div className='header-left fll'>
                    <h1>
                        共享单车后台系统
                    </h1>
                </div>
                <div className='header-right flr'>
                    <span className='username'>
                        欢迎，拉塞尔.维斯布鲁克
                    </span>
                    <span className='logout'>
                        <Link to='/common/login'>退出</Link>
                    </span>
                </div>
            </div>
        )
    }
}