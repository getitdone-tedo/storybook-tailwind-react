import React from 'react';

interface PropTypes extends React.ComponentPropsWithoutRef<'svg'> {
	className: string;
}

export const RightSideIcon: React.FunctionComponent<PropTypes> = (
	props: PropTypes,
) => {
	const { className } = props;
	return (
    <div data-testid="rightSideIcon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
        fill="none">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M8.89 10.156c-.563.049-1.187-.176-1.667-.656L1.55 3.826c-.783-.784-.887-1.95-.23-2.607.656-.656 1.823-.552 2.606.231l4.962 4.962 4.962-4.963c.783-.783 1.95-.886 2.606-.23.656.656.553 1.823-.23 2.606L10.55 9.5c-.478.479-1.1.704-1.66.657z"
        clipRule="evenodd"
      />
      </svg>
    </div>
	);
};
