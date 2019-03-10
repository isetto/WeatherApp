import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import '../App.css'
import { register } from '../API';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            second_name: "",
            email: "",
            phone: "",
            street: "",
            city: "",
            password: "",
            rePassword: "",
            hide: "hidden"
        }
    }


    onChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }



    reg = event => {
        event.preventDefault();
        const state = this.state
        if (state.password !== state.rePassword) {
            this.setState({
                hide: ""
            })
        }
        else {
            const registerData = {
                name: state.name,
                second_name: state.second_name,
                email: state.email,
                phone: state.phone,
                street: state.street,
                city: state.city,
                password: state.password
            }
            register(registerData)
                .then(() => {
                    this.props.history.push({
                        pathname: '/'
                    });
                })


            console.log(registerData)
        }

    }

    render() {
        return (

            <div className="landingLogReg">

                <div className="container positionRegister ">
                    <form onSubmit={this.reg} className="input">
                        <input className="form-control marginB" onChange={this.onChange} value={this.state.name} name="name" placeholder="name" required></input>
                        <input className="form-control marginB" onChange={this.onChange} value={this.state.second_name} name="second_name" placeholder="second_name" required></input>
                        <input className="form-control marginB" onChange={this.onChange} value={this.state.email} name="email" type="email" placeholder="email" required></input>
                        <input className="form-control marginB" onChange={this.onChange} value={this.state.phone} name="phone" placeholder="phone" required></input>
                        <input className="form-control marginB" onChange={this.onChange} value={this.state.street} name="street" placeholder="street" required></input>
                        <input className="form-control marginB" onChange={this.onChange} value={this.state.city} name="city" placeholder="city" required></input>
                        <input className="form-control marginB" onChange={this.onChange} value={this.state.password} name="password" type="password" placeholder="password" required autoComplete="off"></input>
                        <input className="form-control marginB" onChange={this.onChange} value={this.state.rePassword} name="rePassword" type="password" placeholder="rePassword" required autoComplete="off"></input>
                        <input value="register" type="submit" className="btn btn-primary" ></input>
                    </form>
                    <span style={{ visibility: this.state.hide, color: "white" }}>passwords are different</span>
                </div>
            </div>
        );
    }
}

export default withRouter(Register);