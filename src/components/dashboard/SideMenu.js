import React, { Component } from 'react';
import logo from '../../images/logoPulse.png';
import './styles.css';

class SideMenu extends Component {

    render() {

        // this where the side menu component is implemented
        return (
            <div className="side-menu">
                <img src={logo} alt="Logo" className="img-dashboard" />
                <div className="info">
                    <div className="avatar"></div>
                    <h2>{this.props.user.names}</h2>
                    <p>{this.props.user.email}</p>
                    <div className="btn__container"><button className="btn-dashboard">Sign out</button></div>
                </div>
            </div>
        )
    }
}

export default SideMenu