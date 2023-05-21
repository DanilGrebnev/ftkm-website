import { withSuspense } from '@HOC/withSuspense'
import { LoadingCircle } from '@UI/LoadingCircle'
import { Grid } from '@components/containers/Grid'
import preloadMetallurgy from '@images/preloadmetallurgy.webp'
import video1 from '@videos/metallurgy.mp4'
import React from 'react'

import style from './style.module.scss'

const LazyVideo = withSuspense(
    React.lazy(() => import('@components/Ordinary/YouTubeVideo')),
    <LoadingCircle />
)

export const TextAndVideo2 = () => {
    return (
        <Grid className={`Text-and-video-2 ${style.TextAndVideo2}`}>
            <h1>
                Все профессии хороши, но <q>Металлург</q> - звучит гордо
            </h1>
            <video
                preload={preloadMetallurgy}
                style={{ background: 'black' }}
                controls
            >
                <source src={video1} />
            </video>
            <LazyVideo
                title="Металлургия - это красиво!"
                src="https://www.youtube.com/embed/4WiUXo5x2eI"
            />
            {/* <iframe
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            /> */}
            <p>
                В промышленности, строительстве, транспорте, энергетике в
                широких масштабах применяются изделия из литых заготовок.
                Современные достижения в области металлургии литейного
                производства позволяют получать литые заготовки с уникальными
                свойствами для различных отраслей машиностроения. Профиль{' '}
                <strong>
                    {' '}
                    <q>
                        Исследование процессов кристаллизации сталей и сплавов
                    </q>
                </strong>{' '}
                позволит получить тебе интересную и высокооплачиваемую
                специальность, востребованную на рынке труда во все времена.
            </p>
        </Grid>
    )
}
