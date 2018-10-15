import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from '../view/home'
import Admin from '../view/admin';
import NotMatch from '../view/notMatch';
import SecondPage from '../view/secondPage';
import OrderDemo from '../view/order-demo';
import PieDemo from '../echarts/pie_demo';
import OrderDetail from '../view/order-demo/detail';



export default class Router extends Component {

    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        {/* <Route path='/commom/order/detail_demo/:id'
                        component={OrderDetail}
                        >

                        </Route> */}
                        <Route path='/commom/order/detail_demo/:detailid'
                        component={OrderDetail}
                        >
                            
                        </Route>
                        <Route path='/' render={() =>
                            <Admin>
                                <Switch>
                                    <Route path='/admin/home' component={Home}></Route>
                                    <Route path='/admin/order_demo' component={OrderDemo}></Route>
                                    <Route path='/admin/secondPage' component={SecondPage}></Route>
                                    <Route path='/admin/echarts/pie_demo' component={PieDemo}></Route>
                                    <Route component={NotMatch}></Route>
                                </Switch>
                            </Admin>
                        }></Route>
                        <Route component={NotMatch}></Route>
                    </Switch>

                </div>
            </HashRouter>
        )

    }
}
