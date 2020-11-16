import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './index.css'

function Landingpage(){
    return(
        <div className="landingpage-content">
            <Header />
            <div className="landingpage-section">
                <p>This is my page</p>
            </div>
            <Footer />
        </div>
    );
}

export default Landingpage;