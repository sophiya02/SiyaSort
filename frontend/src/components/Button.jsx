import React from 'react';
import './button.css'
const Button = (props) => {
    return (
        <>
        <button type="button" className="btn btn-des" >{props.name}</button>
        </>
    );
}
export default Button;