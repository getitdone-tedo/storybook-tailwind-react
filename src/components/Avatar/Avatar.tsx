import classNames from 'classnames';
import React, { SyntheticEvent } from 'react'

interface AvatarProps {
    imgSrc: string,
    imgAlt: string,
    avatarSize?: 'xsmall'|'small'|'medium'|'normal'|'large'|'desktop'|'mobile',
    onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void,
}

const avatarClass = `object-contain inline-block rounded-full 
border-[3px] border-white shadow-avatarShadow`;

const avatarSizes = (size: string) => 
    classNames({
        'w-10 h-10': !size || size === 'xsmall',
        'w-12 h-12': size === 'small',
        'w-20 h-20': size === 'medium',
        'w-[152px] h-[152px]': size === 'normal',
        'w-44 h-44': size === 'large',
        'w-[72px] h-[72px]': size === 'desktop',
        'w-8 h-8': size === 'mobile',
    });


export const Avatar = ({
    imgSrc = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    imgAlt = "avatar profile",
    avatarSize = "small",
    onClick
}: AvatarProps) => {
    return (
    <div className="flex items-center justify-center">
        <button type="button" onClick={onClick}>
            <img
                className={[avatarClass, avatarSizes(avatarSize)].join(' ')}
                src={imgSrc}
                alt={imgAlt}
            />
        </button>
    </div>
    )
}