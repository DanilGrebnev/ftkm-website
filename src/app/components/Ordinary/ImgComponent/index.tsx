import { FC } from 'react'
import { SyntheticEvent } from 'react'
import React from 'react'

interface ICardMedia<S = string> {
    src: S
    alt?: S
    className?: S
    style?: React.CSSProperties
    onError?: (errorEvent: SyntheticEvent<HTMLImageElement, Event>) => void
    p?: S
}

export const ImgComponent: FC<ICardMedia> = ({
    src,
    alt,
    className,
    style,
    onError,
    p,
}) => {
    return (
        <div>
            <img
                loading="lazy"
                src={src}
                alt={alt}
                className={className}
                style={style}
                onError={onError}
            />
            {p && <p>{p}</p>}
        </div>
    )
}
