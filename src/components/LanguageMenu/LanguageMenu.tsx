import React from 'react'
import { DownArrowIcon, GlobeIcon, UpArrowIcon } from '../icons'
import { MenuItem } from './MenuItem';

interface MenuProps {
    menuData: string[]
}

function LanguageMenu({
    menuData
}: MenuProps) {

    const [currentLanguage, setCurrentLanguage] = React.useState('English');
    const [toggleLanguageMenu, setToggleLanguageMenu] = React.useState(false);

    const toggleLanguage = () => {
        setToggleLanguageMenu(!toggleLanguageMenu);
    }

    return (
        <button
            data-testid="languageMenu-btn"
            type="button"
            onClick={toggleLanguage}
            className="relative inline-flex items-center justify-center space-x-1 space-s-1">
            <GlobeIcon
                className="mt-[3px] mr-[-2px] me-0"
                width={15}
                height={15}
                color="#58585B" />
            <span
				data-testid="languageMenu-span"
				className="text-base text-center text-secondaryColor2">
				{currentLanguage}
			</span>
			
            {toggleLanguageMenu ? (
				<UpArrowIcon className="w-[10px] h-[6px]" />
			) : (
				<DownArrowIcon className="w-[10px] h-[6px]" />
			)}
            
            {toggleLanguageMenu && (
                <div data-testid="languageMenu-menu" className="absolute top-[calc(140%)] right-[calc(0%) end-[calc(0%)] bg-secondaryColor1 border border-[#3f8bbf] lg:w-[240px] w-[162px] drop-shadow-languageMenuShadow">
                    {menuData.map(menu => (
                        <MenuItem menuItem={menu} />
                    ))}
                </div>
            )}
        </button>
    )
}

export default LanguageMenu
