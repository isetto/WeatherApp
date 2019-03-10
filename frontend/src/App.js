import "@babel/polyfill";
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Register from "./container/Register"
import Login from "./container/Login"
import Dashboard from "./container/Dashboard"

class App extends Component {

    render() {
        return (
            <div className="App">

                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </Switch>

            </div>
        );
    }
}

export default App;
