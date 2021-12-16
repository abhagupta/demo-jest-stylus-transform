import React from 'react';
import '../../styles/button.css'

const  Button = (props) => {
    return <button className="buttonStyle">{props.label}</button>
}
export default Button;