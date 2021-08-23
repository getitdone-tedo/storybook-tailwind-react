import React from 'react'

interface MenuProps {
    menuData: [{
        menuTitle: string,
        // href?: string,
    }]
}

function LanguageMenu({
    menuData
}: MenuProps) {
    return (
        <div className="absolute bg-secondaryColor1 border border-[#3f8bbf] lg:w-[240px] w-[162px] drop-shadow-languageMenuShadow">
            {menuData.map(menu => (
                <div className="hover:bg-secondaryColor2 border-b border-[#3f8bbf] h-10 lg:w-[239px] w-[161px] flex items-start justify-start">
                    <button
                        type="button"
                        className="w-full text-start font-robotoFont text-white px-3 py-2 text-base">
                        {menu.menuTitle}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default LanguageMenu
