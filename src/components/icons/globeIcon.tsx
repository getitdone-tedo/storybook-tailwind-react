import React from 'react';

interface PropTypes extends React.ComponentPropsWithoutRef<'svg'> {
	className: string;
  color: string;
  width: number;
  height: number;
}

export const GlobeIcon: React.FunctionComponent<PropTypes> = (
	props: PropTypes,
) => {
	const { className, color, width, height } = props;

	return (
    <div data-testid="globeIcon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={`${className}`}
        fill="none"
        viewBox="0 0 16 16" >
        <path
          fill={color}
          d="M12.35 11.514l.01-.014A6.966 6.966 0 0014 7a6.973 6.973 0 00-1.637-4.5l-.011-.013-.05-.057-.02-.022-.063-.074-.002-.001-.072-.08-.001-.001c-.05-.054-.1-.107-.152-.158l-.001-.002-.075-.075-.005-.004a2.634 2.634 0 00-.095-.091l-.047-.044-.016-.015A6.966 6.966 0 007 0a6.973 6.973 0 00-4.755 1.863l-.015.015-.047.045-.025.024-.07.067-.005.005-.075.075-.002.001-.151.158-.002.002a3.314 3.314 0 00-.072.08H1.78a1.434 1.434 0 00-.064.074l-.02.022c-.016.019-.032.04-.05.058-.002.005-.007.008-.01.013A6.973 6.973 0 000 7c0 1.714.616 3.283 1.637 4.5l.011.014.049.058.019.022.064.073.001.003c.024.027.047.053.072.078l.002.002.15.158.001.001.074.074.004.005A6.987 6.987 0 007 14a6.974 6.974 0 004.91-2.012l.006-.005c.025-.025.05-.049.073-.074l.002-.001c.051-.052.101-.105.15-.158l.001-.002c.024-.026.049-.051.072-.078 0-.001.002-.001.002-.003.022-.023.043-.048.064-.073l.018-.022.052-.058zm.064-2.228c-.216.51-.5.981-.847 1.41a6.939 6.939 0 00-1.273-.874c.181-.733.293-1.538.323-2.384h2.242a5.843 5.843 0 01-.445 1.848zm.445-2.723h-2.242a11.679 11.679 0 00-.323-2.385 6.938 6.938 0 001.273-.873 5.842 5.842 0 011.292 3.257zM9.286 1.585a5.84 5.84 0 011.681 1.081 6.17 6.17 0 01-.928.653c-.245-.703-.56-1.314-.925-1.803.058.022.116.046.172.069zM7.87 12.533a1.772 1.772 0 01-.433.256V9.891c.62.043 1.23.18 1.808.409-.13.384-.28.74-.453 1.06-.272.506-.59.91-.922 1.173zm.922-9.892c.172.321.324.676.453 1.059a6.08 6.08 0 01-1.807.41V1.211c.143.058.289.143.432.257.332.26.65.665.922 1.172zM7.438 9.014V7.438h2.304c-.025.69-.11 1.36-.255 1.996l-.004.02a6.954 6.954 0 00-2.046-.44zm0-2.451V4.986a6.953 6.953 0 002.045-.44l.005.02c.143.636.23 1.304.254 1.997H7.437zm-.875.875v1.576a6.954 6.954 0 00-2.046.44l-.005-.02a10.835 10.835 0 01-.254-1.996h2.304zm-2.305-.875c.025-.691.11-1.361.255-1.997l.004-.02a6.943 6.943 0 002.045.44v1.577H4.258zM6.562 9.89v2.896a1.747 1.747 0 01-.432-.256c-.332-.26-.652-.667-.924-1.173a7.06 7.06 0 01-.453-1.06 6.099 6.099 0 011.81-.407zm0-5.782A6.08 6.08 0 014.755 3.7c.13-.384.28-.74.453-1.06.272-.506.59-.912.923-1.173a1.8 1.8 0 01.433-.256v2.898h-.002zM4.715 1.586c.058-.024.114-.047.172-.069-.366.49-.68 1.1-.925 1.803a6.057 6.057 0 01-.928-.653 5.84 5.84 0 011.681-1.081zM1.586 4.714c.216-.51.5-.981.847-1.41.389.337.815.63 1.273.874a11.682 11.682 0 00-.323 2.385H1.14a5.8 5.8 0 01.445-1.849zM1.14 7.437h2.242c.03.847.142 1.652.323 2.385a6.938 6.938 0 00-1.273.873A5.842 5.842 0 011.14 7.437zm3.573 4.977a5.84 5.84 0 01-1.681-1.081c.289-.247.6-.464.928-.653.245.703.56 1.314.925 1.803a5.781 5.781 0 01-.172-.069zm4.572 0a6.168 6.168 0 01-.172.069c.366-.49.68-1.1.925-1.803.328.187.64.406.928.653a5.841 5.841 0 01-1.681 1.081z"
          />
      </svg>


    </div>
	);
};
