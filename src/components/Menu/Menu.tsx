import React from 'react'

interface MenuProps {
    className?: string,
    className2?: string,
    src?: string,
    alt?: string,
    href?: string,
}

function Menu({
    className=`absolute lg:mt-[52px] mt-[25px] lg:right-0 right-[-40px] -ms-60  
    border-b border-[#3f8bbf] lg:w-[310px] w-[360px] h-screen lg:h-auto drop-shadow-menuDropShadow`,
    className2=`hover:bg-secondaryColor2 bg-secondaryColor1 border-b border-[#3f8bbf] 
    h-20 lg:w-[310px] w-[360px] flex items-start justify-start`,
    href='',
    alt='',
    src=''
}: MenuProps) {
    return (
        <div className={className}>
            <div className={className2}>
                <a
                    href={href}
                    className="font-robotoFont text-white px-6 py-[26px] text-xl"
                    role="menuitem"
                    id="menu-item-0">
                    <div className="flex justify-between">Password</div>
                </a>
            </div>
        </div>
    )
}

export default Menu
