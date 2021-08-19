import React from 'react';
import './Button';
import './Button.css';

function Button(props:any) {
    const { variant = 'primary', children, ...rest } = props;
    return (
        <button className="primaryColor1" {...rest}>
            {children}
        </button>
    )
}

export default Button
