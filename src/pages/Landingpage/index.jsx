import React, { useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import './index.css'

function Landingpage(){
    const [click, setClick] = useState(false);
    return(
        <div className="landingpage-content">
            <Header />
            <div className="landingpage-section">
                <p>This is my page</p> 
                <p>If you liked click the button</p>
                <Button click={() => setClick(!click)} text="I liked" />
                {click && (
                    <p>Thank You =)</p>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Landingpage;