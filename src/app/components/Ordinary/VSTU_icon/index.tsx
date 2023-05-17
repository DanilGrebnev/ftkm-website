import vstu from '@images/VSTU.png'
import React from 'react'

interface IVSTUIcon {
    style?: React.CSSProperties
    className?: string | undefined
}

export const VSTUIcon: React.FC<IVSTUIcon> = ({ style, className }) => {
    return (
        <a
            className={className}
            href="https://www.vstu.ru/"
        >
            <img
                alt="vstuIcon"
                style={style}
                src={vstu}
            />
        </a>
    )
}
