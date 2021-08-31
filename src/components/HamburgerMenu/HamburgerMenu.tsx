import React from 'react'
import { CloseIcon, MenuIcon } from '../icons'
import { MenuItem } from './MenuItem';

interface MenuProps {
    menuData: MenuData[]
}
interface MenuData {
    menuTitle: string,
    href: string,
}

function HamburgerMenu({
    menuData
}: MenuProps) {

    const [toggleHamburgerMenu, setToggleHamburgerMenu] = React.useState(false);

    const toggleHamburger = () => {
        setToggleHamburgerMenu(!toggleHamburgerMenu);
    }
    
    return (
        <div data-testid="hamburgerMenu" className="relative lg:h-[72px] lg:w-[32px] h-8 w-2 flex z-[100]">
            <div className="flex items-center justify-center">
                <button
                    data-testid="hamburgerMenu-btn"
                    type="button"
                    onClick={toggleHamburger}
                    aria-label="toggle Hamburger Menu">
                    {toggleHamburgerMenu ? (
                        <CloseIcon className="lg:h-[25px] lg:w-[30px] h-[23px] w-[23px]" />
                    ) : (
                        <MenuIcon className="lg:h-[25px] lg:w-[30px] h-[19px] w-[21px]" />
                    )}
                </button>
            </div>

            {toggleHamburgerMenu && (
                <div className="b">
                    <div data-testid="hamburgerMenu-menu"
                    className="absolute lg:mt-[52px] mt-[25px] lg:right-0 -right-4 lg:-ms-96 -ms-80
                    bg-secondaryColor1 border-b border-[#3f8bbf] lg:w-[440px] w-[360px] h-screen lg:h-auto  drop-shadow-menuDropShadow">
                        {menuData.map(menu => (
                            <MenuItem menuTitle={menu.menuTitle} menuHref={menu.href} />
                        ))}
                    </div>
                </div>
            )}

        </div>
    )
}

export default HamburgerMenu
