import React, { Component } from 'react'
import HeadDemo from '../../components/header/headDemo';
import { Card } from 'antd';
import './detail.less';
import axios from '../../axios'

export default class OrderDetail extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.getData()
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        const { detailid } = this.props.match.params
        axios.get('/order/detail', { id: detailid }).then(res => {
            if (res.code == 0) {
                this.initMap(res.result)
            }
        })
    }
    //初始化地图
    initMap = (result) => {
        const BMap = window.BMap
        this.map = new BMap.Map("bmap-container");          // 创建地图实例  
        // const point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
        // this.map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别  
        this.addControl()
        this.drowPolyline(result.position_list)
        this.drowServiceArea(result.area)
    }

    //添加控件
    addControl = () => {
        const BMap = window.BMap
        const map = this.map
        map.addControl(new BMap.NavigationControl({
            anchor: window.BMAP_ANCHOR_TOP_RIGHT
        }));
        map.addControl(new BMap.ScaleControl({
            anchor: window.BMAP_ANCHOR_TOP_RIGHT
        }));
    }

    //绘制路径折线图
    drowPolyline = (position_list) => {
        const BMap = window.BMap
        const map  =  this.map


        let startPoint = position_list[0]
        let endPoint   = position_list[position_list.length-1] 
        let startBmapPoint = new BMap.Point(startPoint.lon, startPoint.lat);
        let endBmapPoint = new BMap.Point(endPoint.lon, endPoint.lat);


        let startMarker  = new BMap.Marker(startBmapPoint)
        let endMarker  = new BMap.Marker(endBmapPoint)
        map.addOverlay(startMarker)
        map.addOverlay(endMarker)
        map.centerAndZoom(startBmapPoint,11)  


        var polyline = new BMap.Polyline(position_list.map(point =>{
            return new BMap.Point(point.lon,point.lat)
        }),
            {strokeColor:"#1869AD", strokeWeight:3, strokeOpacity:1}
            );
        map.addOverlay(polyline);
         
    }

    //绘制服务区
    drowServiceArea = (area) => {
        const BMap = window.BMap
        const map  = this.map 

        let polygon = new BMap.Polygon(
            area.map(point => new BMap.Point(point.lon,point.lat)),
            {
                strokeColor:'#ff0000',
                strokeWeight:6,
                fillColor:'#ff6700',
                fillOpacity:'0.5'
            }
        )

        map.addOverlay(polygon)
    }

    render() {
        return (
            <div className="detail-demo">
                <HeadDemo></HeadDemo>
                <Card>
                    <div className="bmap-wrap" id="bmap-container">
                    </div>
                </Card>
            </div>
        )
    }
}