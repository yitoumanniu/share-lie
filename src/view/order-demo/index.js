import React, { Component } from 'react'
import './index.less'
import { Form, Select, Card, DatePicker, Button, Table ,message, Modal} from 'antd'
import axios from '../../axios'



const FormItem = Form.Item
const Option = Select.Option

const { RangePicker } = DatePicker

class OrderDemo extends Component {

    cityOption = [
        {
            label: '北京',
            value: '0'
        },
        {
            label: '上海',
            value: '1'
        },
        {
            label: '广东',
            value: '2'
        }
    ]

    orderStatus = [
        {
            label: '进行中',
            value: '0'
        },
        {
            label: '已完成',
            value: '1'
        },
        {
            label: '结束行程',
            value: '2'
        }
    ]

    constructor(props){
        super(props)
    }

    state = {
        dataSource:[],
        pageSize:'',
        total:'',
        isLoding:false,
        

    }

    componentDidMount(){
        this.getTable()
    }

    params = {
        pn:1
    }

    //获取数据

    getTable =()=>{
        this.setState({
            isLoding:true
        })

        axios.get('/order/list',this.params).then(res=>{
            if (res.code==0) {
                this.setState({
                    dataSource:res.result.item_list.map((item, index) => {
                        item.key = index
                        return item
                    }),
                    pageSize:10,
                    total: res.result.total_count,
                    isLoding:false
                })
            }
        })
    }
    handleSearch = () => {
        console.log(this.props.form.getFieldsValue())
    }
    //重置数据
    resetData = ()=>{
        this.props.form.resetFields()
    }
    //结束订单 （弹出）
    handleDone =()=>{
        let selectedItem = this.state.selectedItem
        if(selectedItem){
            axios.get('/order/eblik_info',{id:selectedItem.id}).then(res=>{
                console.log(res)
                this.setState({
                    endItem:res.result,
                    visible:true
                })
            })
        }else{
            message.info('请选择一项订单进行操作')
        }
    }
    //用户已经决定结束这个订单
    handleEnd =()=>{

    }

    render() {


        const { getFieldDecorator } = this.props.form;
        const columns = [
            {
                title:'订单编号',
                dataIndex:'order_sn',
                key:'order_sn'
            },
            {
                title:'车辆编号',
                dataIndex:'bike_sn',
                key:'bike_sn'
            },
            {
                title:'用户名',
                dataIndex:'user_name',
                key:'user_name'
            },
            {
                title:'手机号',
                dataIndex:'mobile',
                key:'mobile'
            },
            {
                title:'里程(KM)',
                dataIndex:'distance',
                key:'distance'
            },
            {
                title:'行驶时长',
                dataIndex:'total_time',
                key:'total_time'
            },
            {
                title:'状态',
                dataIndex:'status',
                key:'status'
            },
            {
                title:'开始时间',
                dataIndex:'start_time',
                key:'start_time'
            },
            {
                title:'结束时间',
                dataIndex:'end_time',
                key:'end_time'
            },
            {
                title:'应付金额',
                dataIndex:'total_fee',
                key:'total_fee'
            },
            {
                title:'实付金额',
                dataIndex:'user_pay',
                key:'user_pay'
            },
        ]

        const _this = this;
        
        const pagination = {
            total : this.state.total,
            pageSize:10,
            onChange: (index)=>{
                _this.params.pn =index
                _this.getTable()
            }
        }

        const rowSelection = {
            type:'radio',
            // selectedRowKeys:this.state.selectedIndex,
            onChange: (selectedRowKeys,selectedRows)=>{
                console.log(selectedRowKeys,selectedRows)
                this.setState({
                    selectedItem:selectedRows,
                    selectedIndex:selectedRowKeys
                })
            }
        }

        return (
            <div>
                <Card>
                    <Form
                        layout="inline"
                    >
                        <FormItem
                            label="城市"
                        >
                            {
                                getFieldDecorator('city',{
                                    initialValue:'1'
                                })(
                                    <Select style={{ width: 190 }}>
                                        {this.cityOption.map(item =>
                                            <Option value={item.value} key={item.value}>{item.label}</Option>
                                        )}
                                    </Select>
                                )
                            }
                        </FormItem>

                        <FormItem
                            label="订单时间"
                        >
                            {
                                getFieldDecorator('date')( 
                                        <RangePicker></RangePicker>    
                                )
                            }
                        </FormItem>

                        <FormItem
                            label="订单状态"
                        >
                            {
                                getFieldDecorator('order_status')(
                                    <Select style={{ width: 220 }}>
                                    {this.orderStatus.map(item => <Option value={item.value} key={item.value}>{item.label}</Option>)}
                                </Select>
                                )
                            }
                           
                        </FormItem> 
                    </Form>
                    <div className="btn-wrap">
                        <Button type="primary" onClick={this.handleSearch}>查询</Button>
                        <Button onClick={this.resetData}>重置</Button>
                    </div>
                </Card>
                <Card style={{marginTop:'-1px'}}>
                    <Button  type="primary" className="mgr-20">订单详情</Button>
                    <Button onClick={this.handleDone}>结束订单</Button>
                </Card>
                <Card>
                    <Table columns={columns} 
                    dataSource={this.state.dataSource}
                    pagination={pagination}
                    loading={this.state.isLoding}
                    rowSelection={rowSelection}
                    ></Table>        
                </Card>
                <Modal 
                    title="结束订单"
                    visible={this.state.isShowModel}
                    onOk={this.handleEnd}
                    // onCancel={this.setState({
                    //     isShowModel:false
                    // })}
                >

                </Modal>
            </div>
        )
    }
}

export default Form.create()(OrderDemo)