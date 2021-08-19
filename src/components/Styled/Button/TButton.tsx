import React from 'react';
import './TButton.css';


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
            className="bg-primaryColor1"
            {...props} 
        >
            {label}
        </button>
    );
};



export default TButton
