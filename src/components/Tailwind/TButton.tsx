import classNames from 'classnames';
import React from 'react'

const buttonClasses = (variant: any) => 
    classNames({
        'border-transparent text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500': !variant || variant === 'primary',
        'border-transparent text-white bg-red-600 focus:ring-red-700 focus:border-red-600': variant === 'danger-primary',
        'border-grey-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500': variant === 'secondary',
        'border-red-600 text-red-600 bg-white focus:ring-red-600 focus:border-red-600': variant === 'danger',
        'inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium focus:outline-node focus:ring-2 focus:ring-offset-2 ': true
    });

const TButton = (props: any) => {
    const {  variant, children, onClick, ...rest } = props;
    return (
        <button className={buttonClasses(variant)} onClick={onClick} {...rest}>{children}</button>
    );
};


export default TButton
