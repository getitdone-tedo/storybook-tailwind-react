import React from 'react';

interface PropTypes extends React.ComponentPropsWithoutRef<'svg'> {
	className: string;
}

export const CloseIcon: React.FunctionComponent<PropTypes> = (
	props: PropTypes,
) => {
	const { className } = props;

	return (
    <div data-testid="closeIcon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill="#58585B"
        d="M14.408 11.998L24.075.823c.162-.185.025-.468-.225-.468h-2.94a.608.608 0 00-.452.204l-7.974 9.218L4.511.559a.596.596 0 00-.453-.204H1.12C.87.355.732.638.894.823l9.668 11.175L.895 23.173a.28.28 0 00.067.424.3.3 0 00.158.044h2.94a.608.608 0 00.452-.203l7.974-9.218 7.974 9.218c.11.128.276.203.453.203h2.939c.25 0 .387-.282.225-.468l-9.668-11.175z"
      />
    </svg></div>
	);
};
