import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
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
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/"><li>About</li></Link>
                        <Link to="/"><li>Contact</li></Link>
                        <Link to="/"><li>Surprise</li></Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Menu;