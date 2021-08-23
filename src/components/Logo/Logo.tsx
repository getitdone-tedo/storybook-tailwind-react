import React from 'react'

interface LogoProps {
    src?: string,
    alt?: string,
    href?: string,
}

const logoClass = `lg:h-[86px] h-8 w-auto`;

export const Logo = ({
    src = "E2E_LOGO.png",
    alt = "E2E Group Logo",
    href = "/"
}:LogoProps) => {
    return (
    <div className="">
        <a href={href} >
            <img className={logoClass} src={src} alt={alt} />
        </a>
    </div>
    )
}
