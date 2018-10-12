import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../style/commom.less'
import './header.less'
import {formatDate} from '../../utils'
import axios from 'axios'


export default class Header extends Component{
    constructor(props){
        super(props)
    }

    state = {
        time: '2018-08-01 23:30:56',
        weather: ''
    }

    getTime = ()=>{
        setInterval(()=>{
            let unixDate = new Date().getTime()
            let timeStr  = formatDate(unixDate)
            this.setState({
                time: timeStr
            })
        },1000)
    }

    getWeather = ()=>{
        axios.get('http://t.weather.sojson.com/api/weather/city/101010100').then(res=>{
            let weather = res.data.data.forecast[0]
            // console.log(weather)
            let weatherStr = `${weather.low} ~ ${weather.high}  ${weather.fx}
            ${weather.fl}`
            this.setState({
                weather:weatherStr
            })
        })
    }

    componentWillMount(){
        this.getWeather()
        this.getTime()
    }

    render(){
        return(
            <div className='header-warp'>
                <div className='user-info clearfix'>
                    <div className='flr'> 
                        <Link to='/login'>退出</Link>
                    </div>
                    <div className='user-detail flr'>
                        欢迎 ,{''} <span className='username'>中国队长</span>
                    </div>
                </div>
                <div className='weather-warp clearfix'>
                    <div className='breadcrumb fll'>
                        首页
                    </div>
                    <div className='weather flr clearfix'>
                        <div className='date fll'>
                            {this.state.time}
                        </div>
                        <div className='weather-detail fll'>
                            {this.state.weather}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}