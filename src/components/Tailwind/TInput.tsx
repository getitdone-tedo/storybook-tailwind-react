import classNames from 'classnames';
import React from 'react';
import './TInput.css';

const logoClasses = (size: string) =>
  classNames({
    'w-96 bg-red-500': !size || size === 'xl',
    'w-48 bg-red-500': size === 'lg',
    'w-16 bg-red-500': size === 'md',
    'w-12 bg-red-500': size === 'sm'
  })
	// <input
  //   type="text"
  //   id="userName"
  //   name="userName"
  //   data-testid="userName"
  //   placeholder=" "
  //   className=" text-baseColor6 px-3 input block w-full appearance-none focus:outline-none bg-transparent"
  // />
function TInput(props: any) {
    // const { size = 'Small', ...rest } = props;
    const { size } = props;

    return (
        <input className={logoClasses(size)} />
    )
}

export default TInput
