import React, { Component } from 'react';
import logo from './assets/logoPulse.png';
import './styles.css';

class SideMenu extends Component {

    render() {

        // this where the side menu component is implemented
        return (
            <div className="side-menu">
                <img src={logo} alt="Logo"/>
                <div className="info">
                    <div className="avatar"></div>
                    <h2>John Doe</h2>
                    <p>john.doe@gmail.com</p>
                    <button>Sign out</button>
                </div>
            </div>
        )
    }
}

export default SideMenu