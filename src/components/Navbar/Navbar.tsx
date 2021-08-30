import React from 'react'
import { Logo } from '../Logo/Logo';

interface NavbarProps {
    className?: string,
    children: any
}

const navbarClass = `grid lg:grid-cols-12 grid-cols-4 gap-4 bg-white 
lg:h-[104px] h-[50px] px-4 shadow-navbarShadow flex justify-center items-center`;

export const Navbar = ({
    className = '',
    children,
    ...props
}: NavbarProps) => {

    return (
        <nav className={navbarClass} {...props}>
            <div className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-5 col-span-full">
				<div className="flex justify-between">
					<div data-testid="navbar-logo" className="">
						<Logo />
					</div>
					<div
						data-testid="navbar-menu"
						className="flex justify-center items-center space-x-4 space-s-4 lg:space-x-8 lg:space-s-8">
                            {children}
                    </div>
                </div>
            </div>
        </nav>
    );
};
