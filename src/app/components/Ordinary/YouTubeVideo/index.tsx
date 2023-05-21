import React from 'react'

interface IYouTubeVide {
    src: string
    title: string
}

const YouTubeVIde: React.FC<IYouTubeVide> = ({ src, title }) => {
    return (
        <iframe
            loading="lazy"
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
    )
}

export default YouTubeVIde
