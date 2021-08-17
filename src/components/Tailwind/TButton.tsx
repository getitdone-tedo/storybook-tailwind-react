import classNames from 'classnames';
import React from 'react';



const buttonClasses = (variant: any) => 
    classNames({
        'border-transparent text-white focus:ring-indigo-500': !variant || variant === 'primary',
        'border-transparent text-white bg-red-600 focus:ring-red-700 focus:border-red-600': variant === 'danger-primary',
        'border-grey-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500': variant === 'secondary',
        'border-red-600 text-red-600 bg-white focus:ring-red-600 focus:border-red-600': variant === 'danger',
        'inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium focus:outline-node focus:ring-2 focus:ring-offset-2 ': true
    });

// const buttonSizes = (size: any) => 
//     classNames({
//         'px-2 py-2': !size || size === 'small',
//         'px-4 py-4': size === 'medium',
//         'px-6 py-6': size === 'large',
//     });


interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    variant?: 'primary' | 'secondary' | 'danger' | 'danger-primary';
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    // size?: 'small' | 'medium' | 'large';
    size?: string;
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
    size,
    backgroundColor,
    label,
  ...props
}: ButtonProps) => {
    return (
        <button className={[buttonClasses(variant), size, backgroundColor].join(' ')} {...props}>
            {label}
        </button>
    );
};


export default TButton
