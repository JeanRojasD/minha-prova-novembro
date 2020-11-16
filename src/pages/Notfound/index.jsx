import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import notfoundimage from '../../assets/images/notfound.png'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import './index.css'


function Notfound(){
    return(
        <div className="notfound-page">
            <Header />
            <div className="notfound-content">
                <img src={notfoundimage}></img>
                <h2>This page was not found</h2>
                <p>PLEASE USE THE BUTTON BELOW TO RETURN TO OUR PAGES</p>
                <Link to="/"><Button text="Return to LadingPage" /></Link>
            </div>
            <Footer />
        </div>
    );
}

export default Notfound;