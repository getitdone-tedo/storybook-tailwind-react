import React from 'react';

interface PropTypes extends React.ComponentPropsWithoutRef<'svg'> {
	className: string;
}

export const LeftSideIcon: React.FunctionComponent<PropTypes> = (
	props: PropTypes,
) => {
	const { className } = props;
	return (
    <div data-testid="leftSideIcon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
        fill="none">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M9.478 1.034a2.09 2.09 0 00-2.956 0l-.002.002L.612 6.944A2.09 2.09 0 103.567 9.9L8 5.467l4.433 4.432a2.09 2.09 0 102.955-2.955l-5.91-5.91z"
        clipRule="evenodd"
      />
      </svg>
    </div>
	);
};
