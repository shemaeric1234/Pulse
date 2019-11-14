import React, { Component } from 'react'

import '../Login/Login.css';
import LoginPage from '../Login/login.js';
import Signup from '../signup/Signup.js';
import logo from '../Login/images/logo.svg';

export class Account extends Component {

    state = {
        component: "Signin"
    }

    changeComponent = (component) => {
        this.setState({component: component});
    }

    render() {
        return (
            <div className='wraper'>
                <div className='designWraper'>
                    <div className='emptyDiv'></div>
                    <div className='logo'>
                        <img src={logo} alt="Smiley face" height="138" width="348" className='secondImage' ></img>
                    </div>
                    <div className='disign'>
                        <svg width="240" height="246" viewBox="0 0 240 246" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0C69.4597 25.5765 97.9814 78.2584 81.0711 133.163C69.1006 172.028 123.761 191.354 172.31 208.519C205.322 220.19 235.508 230.863 240 246H0L0 0Z" fill="#0094FF" />
                        </svg>
                    </div>
                </div>
                {this.state.component == "Signin" ? <LoginPage changeComponent={this.changeComponent}/> : <Signup changeComponent={this.changeComponent}/>}
            </div>
        )
    }
}

export default Account;