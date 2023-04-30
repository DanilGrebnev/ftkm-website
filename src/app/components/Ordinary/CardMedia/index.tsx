import { FC } from 'react'
import { SyntheticEvent } from 'react'

interface ICardMedia<S = string> {
    src: S
    alt: S
    className?: S
    style?: { [key: string]: string }
    onError?: (errorEvent: SyntheticEvent<HTMLImageElement, Event>) => void
}

export const ImgComponent: FC<ICardMedia> = ({
    src,
    alt,
    className,
    style,
    onError,
}) => {
    return (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            className={className}
            style={style}
            onError={onError}
        />
    )
}
