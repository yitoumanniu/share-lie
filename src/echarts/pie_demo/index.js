import React, { Component } from 'react'
import echarts from 'echarts/lib/chart/pie'         //引入echarts核心包
import EchartsReact from 'echarts-for-react'
// import echarts from '../echartTheme'
// import 'echarts/lib/component/legend'
import { Card } from 'antd'


export default class PieDemo extends Component {
    constructor(props) {
        super(props)
    }

    pie1 = () => {
        return {
            title: {
                text: '用户骑行订单',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
            },
            legend: {
                orient: 'vertical',
                right: 'right',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            series: [
                {
                    name: '骑行订单',
                    type: 'pie',
                    radius: '80%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: '周一' },
                        { value: 310, name: '周二' },
                        { value: 234, name: '周三' },
                        { value: 135, name: '周四' },
                        { value: 1548, name: '周五' },
                        { value: 1548, name: '周六' },
                        { value: 1548, name: '周日' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
    }

    pie2 = () => {
        return {
            title: {
                text: '某站点用户访问来源',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['周一', '周二', '周三', '周四', '周五','周六','周日']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['60%','80%'],
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: '周一' },
                        { value: 310, name: '周二' },
                        { value: 234, name: '周三' },
                        { value: 135, name: '周四' },
                        { value: 1548, name: '周五' },
                        { value: 1548, name: '周六' },
                        { value: 1548, name: '周日' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Card
                    title="饼状图一"
                >
                    <EchartsReact option={this.pie1()}></EchartsReact>
                </Card>
                <Card
                    title="饼状图二"
                >
                    <EchartsReact option={this.pie2()}></EchartsReact>
                </Card>
            </div>
        )
    }
}