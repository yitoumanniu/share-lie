import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from '../view/home'
import Admin from '../view/admin';
import NotMatch from '../view/notMatch';
import SecondPage from '../view/secondPage';


export default class Router extends Component {

    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path='/' render={() =>
                            <Admin>
                                <Switch>
                                    <Route path='/admin/home' component={Home}></Route>
                                    <Route path='/admin/secondPage' component={SecondPage}></Route>
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
