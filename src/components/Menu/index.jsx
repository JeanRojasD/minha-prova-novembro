import React from 'react'
import logo from '../../assets/images/logo.png'
import './index.css'

function Menu(){
    return(
        <div className="menu">
            <div className="items-left">
                <img src={logo} alt="logo"></img>
            </div>
            <div className="items-right">
                <nav>
                    <ul className="list-menu">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Surprise</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Menu;