import { Grid } from '@components/containers/Grid'
import video1 from '@videos/metallurgy.mp4'

import style from './style.module.scss'

export const TextAndVideo2 = () => {
    return (
        <Grid className={`Text-and-video-2 ${style.TextAndVideo2}`}>
            <h1>Все профессии хороши, но "Металлург" - звучит гордо.</h1>
            <video
                style={{ background: 'black' }}
                width="100%"
                src={video1}
                height="359"
                controls
            />

            <iframe
                width="100%"
                height="359"
                src="https://www.youtube.com/embed/4WiUXo5x2eI"
                title="Металлургия - это красиво!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            <p>
                В промышленности, строительстве, транспорте, энергетике в широких масштабах
                применяются изделия из литых заготовок. Современные достижения в области
                металлургиии литейного производства позволяют получать литые заготовки с уникальными
                свойствами для различных отраслей машиностроения. Профиль "Исследование процессов
                кристаллизации сталей и сплавов" позволит получить тебе интересную и
                высокооплачиваемую специальность, востребованную на рынке труда во все времена.
            </p>
        </Grid>
    )
}
