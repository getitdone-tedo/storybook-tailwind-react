import classNames from 'classnames';
import React from 'react';
import './TButton.css';

const buttonClasses = (variant: any) => 
    classNames({ 
        'text-white border border-white': !variant || variant === 'primary',
        'text-black border border-gray': variant === 'secondary',
        'cursor-pointer box-border rounded border-solid': true
    });

const buttonSizes = (size: any) => 
    classNames({
        'w-24 h-6': !size || size === 'small',
        'w-28 h-8': size === 'medium',
        'w-28 h-10': size === 'large',
    });


interface ButtonProps {
    /**
     * variant
     */
    variant?: 'primary' | 'secondary';
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    // size?: string;
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}  


const TButton = ({
    variant = 'primary',    
    size = 'medium',
    backgroundColor,
    label,
  ...props
}: ButtonProps) => {
    return (
        <button 
            className={[buttonClasses(variant), buttonSizes(size)].join(' ')} 
            {...props} 
            style={{ backgroundColor }}
        >
            {label}
        </button>
    );
};


export default TButton
