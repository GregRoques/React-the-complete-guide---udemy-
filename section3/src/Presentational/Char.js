import React from 'react';
import './Char.css'

const Char = props => {

    return(
    <div className ="CharCenter" onClick={props.click}>
        {props.text}
    </div>
    )
}

export default Char;