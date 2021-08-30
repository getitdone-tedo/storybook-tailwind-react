import React from 'react';

interface PropTypes extends React.ComponentPropsWithoutRef<'svg'> {
	className: string;
}

export const MenuIcon: React.FunctionComponent<PropTypes> = (
	props: PropTypes,
) => {
	const { className } = props;

	return (
    <div data-testid="menuIcon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
        fill="none"
        viewBox="0 0 32 32">
        <path
          fill="#58585B"
          d="M29.937.422H1.062a.291.291 0 00-.294.286v2.285a.29.29 0 00.294.286h28.875a.291.291 0 00.295-.286V.708a.291.291 0 00-.295-.286zm0 22.286H1.062a.291.291 0 00-.294.285v2.286a.29.29 0 00.294.286h28.875a.291.291 0 00.295-.286v-2.286a.291.291 0 00-.295-.285zm0-11.143H1.062a.291.291 0 00-.294.285v2.286a.29.29 0 00.294.286h28.875a.291.291 0 00.295-.286V11.85a.291.291 0 00-.295-.285z"
          />
      </svg>
    </div>
	);
};
