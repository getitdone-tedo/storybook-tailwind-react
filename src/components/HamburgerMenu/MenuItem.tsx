import React, { FC } from 'react'

export const MenuItem: FC<{menuTitle:string, menuHref:string}> = ({menuTitle, menuHref}) => {
    return (
        <div className="hover:bg-secondaryColor2 border-b border-[#3f8bbf] h-20 lg:w-[440px] w-[360px]
        flex items-start justify-start">
            <a
                href={menuHref}
                className="font-robotoFont text-white px-6 py-[26px] text-xl"
                role="menuitem"
                id="menu-item-0">
                {menuTitle}
            </a>
        </div>
    )
}


