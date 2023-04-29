import { FC } from 'react'

interface ICardMedia<S = string> {
    src: S
    alt: S
    className?: S
    style?: { [key: string]: string }
}

export const ImgComponent: FC<ICardMedia> = ({
    src,
    alt,
    className,
    style,
}) => {
    return (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            className={className}
            style={style}
        />
    )
}
