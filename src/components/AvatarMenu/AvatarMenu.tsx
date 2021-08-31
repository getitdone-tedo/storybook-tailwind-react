import React from 'react'
import { Avatar } from '../Avatar/Avatar';

interface MenuProps {
    menuData: MenuData[]
}
interface MenuData {
    menuTitle: string,
    href: string,
}

function AvatarMenu({
    menuData
}: MenuProps) {

    const [toggleAvatarMenu, setToggleAvatarMenu] = React.useState(false);

    const toggleAvatar = () => {
        setToggleAvatarMenu(!toggleAvatarMenu);
    }

    return (
        <div
			data-testid="avatar"
			className="relative flex items-center justify-center z-[100]">

            <Avatar 
                imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                imgAlt="avatar profile"
                avatarSize="desktop" 
                onClick={toggleAvatar} />

            {toggleAvatarMenu && (
            <div className="absolute bg-secondaryColor1 border-b border-[#3f8bbf] lg:w-[440px] w-[360px] lg:h-auto drop-shadow-menuDropShadow">
                {menuData.map(menu => (
                    <div className="hover:bg-secondaryColor2 border-b border-[#3f8bbf] h-20 lg:w-[440px] w-[360px]
        flex items-start justify-start">
                        <a
                            href={menu.href}
                            className="font-robotoFont text-white px-6 py-[26px] text-xl">
                            <div className="flex justify-between">{menu.menuTitle}</div>
                        </a>
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}

export default AvatarMenu
