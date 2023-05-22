import { IVideo } from '@interfaces/video'
import React from 'react'

import s from './s.module.scss'

interface InterfaceVideo extends IVideo {
    type?: 'youtube' | string
}

const Video: React.FC<InterfaceVideo> = ({
    src,
    title,
    type,
    controls,
    poster,
    preload = 'none',
    style,
    className,
}) => {
    if (type || type?.toLowerCase() === 'youtube') {
        return (
            <iframe
                style={style}
                loading="lazy"
                title={title}
                src={src}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
        )
    }

    return (
        <video
            style={style}
            className={`${s.video} ${className}`}
            preload={preload}
            poster={poster}
            controls={controls}
        >
            <source src={src} />
        </video>
    )
}

export default Video
