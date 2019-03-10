import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import '../App.css'
import { login } from '../API';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            visible: "hidden"
        }
    }


    onChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    log = event => {
        event.preventDefault();
        const state = this.state
        const loginData = {
            email: state.login,
            password: state.password
        }

        login(loginData)
            .then((dane) => {
                if (dane === "wrong") {

                    this.setState({ visible: "visible" })
                }
                else {
                    console.log(dane)
                    this.props.history.push({
                        pathname: '/dashboard',

                    });
                }

            })

    }

    register = () => {
        this.props.history.push({
            pathname: '/register'
        });
    }

    render() {
        return (
            <div className="landingLogReg">


                <div className="container positionLogin">
                    <form onSubmit={this.log} className="input">
                        <input type="email" className="form-control marginB" onChange={this.onChange} value={this.state.email} name="email" placeholder="email" required></input>
                        <input type="password" className="form-control marginB " onChange={this.onChange} value={this.state.password} name="password" placeholder="password" required></input>
                        <input type="submit" className="btn btn-primary marginB widthButton" value="login"></input>
                    </form>
                    <div>

                        <button onClick={this.register} className="btn btn-primary widthButton" >Register</button>
                        <p style={{ visibility: this.state.visible, color: "white" }}>login or password are wrong</p>

                    </div>

                </div>


            </div>
        );
    }
}

export default withRouter(Login);