import { LazyVideo } from '@components/Ordinary/LazyVideo'
import { Container } from '@mui/material'
import putinVideo from '@videos/metallurgy-putin.mp4'

import style from './style.module.scss'

export const TextAndVideo1 = () => {
    return (
        <Container
            component="section"
            maxWidth="xl"
            sx={{ display: 'flex' }}
            className={`Text-and-video-1 ${style.TextAndVideo1}`}
        >
            <p>
                <strong>
                    <q>
                        Сегодня работа сотен и тысяч горянков и металлургов во
                        многом определяют динамику российской экономики
                    </q>
                    ,
                </strong>
                - сказал Владимир Владимирович Путин о металлургии.
            </p>
            <LazyVideo
                src={putinVideo}
                preload="metadata"
                controls
            />
        </Container>
    )
}
