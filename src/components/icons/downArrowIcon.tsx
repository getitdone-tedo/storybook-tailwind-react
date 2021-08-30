import React from 'react';

interface PropTypes extends React.ComponentPropsWithoutRef<'svg'> {
	className: string;
}

export const DownArrowIcon: React.FunctionComponent<PropTypes> = (
	props: PropTypes,
) => {
	const { className } = props;

	return (
    <div data-testid="downArrowIcon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
        fill="none">
        <path
          fill="#58585B"
          d="M9.49.101H.51C.24.101.09.386.257.58l4.49 5.206a.342.342 0 00.506 0L9.743.58C9.908.386 9.758.1 9.49.1z"
          />
      </svg>
    </div>
	);
};
