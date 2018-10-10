import React, { Component } from 'react'
import './index.less'
import { Link } from 'react-router-dom'
import notMatchImg from './img.gif'


export default class NotMatch extends Component {

    render() {
        return (
            <div className='notmatch clearfix'>
                <div className='notmatch-left fll'>
                    <div className='title'>
                        oh! my Captain China
                    </div>
                    <div className='desc'>
                        404！！ 页面被黑寡妇吃了
                    </div>
                    <strong>
                        如有不满！请联系中国队长
                    </strong>
                    <ul>
                        <li>
                            或者你可以
                        </li>
                        <li>
                            <Link to='/admin/home'>
                                回首页
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='img-wrap fll'>
                    <img src={notMatchImg}/>
                </div>
            </div>
        )
    }
}