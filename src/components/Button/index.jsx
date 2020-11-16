import React from 'react'
import './index.css'

function Button(props){
    return(
        <button type="button" className="button-style" onClick={props.click}>{props.text}</button>
    );
}

export default Button;


