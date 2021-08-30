import React from 'react';

interface PropTypes extends React.ComponentPropsWithoutRef<'svg'> {
	className: string;
}

export const UpArrowIcon: React.FunctionComponent<PropTypes> = (
	props: PropTypes,
) => {
	const { className } = props;
	return (
    <div data-testid="upArrowIcon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
        fill="none">
        <path
          fill="#58585B"
          d="M9.742 5.42L5.252.212a.342.342 0 00-.505 0L.257 5.419c-.167.194-.016.479.253.479h8.98c.269 0 .42-.285.252-.479z"
          />
      </svg>
    </div>
	);
};
