import React from 'react';
import './Button.css';

const Button = props => (
    <button className="btn_toggle" onClick={props.click}>
        <div className="button_line"></div>
        <div className="button_line"></div>
        <div className="button_line"></div>
        <div className="button_line"></div>
    </button>
)
export default Button;