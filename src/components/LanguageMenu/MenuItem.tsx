import React, { FC, SyntheticEvent } from 'react'

export const MenuItem: FC<{menuItem:string}> = ({menuItem}) => {

    return (
        <div className="hover:bg-secondaryColor2 border-b border-[#3f8bbf] h-10 lg:w-[239px] w-[161px] flex items-start justify-start">
            <button
                type="button"
                className="w-full text-start font-robotoFont text-white px-3 py-2 text-base">
                {menuItem}
            </button>
        </div>
    )
}
