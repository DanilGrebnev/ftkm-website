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
                    "Сегодня работа сотен и тысяч горянков и металлургов во много определяют
                    динамику российской экономики",
                </strong>
                - сказал Владимир Владимирович Путин о металлургии.
            </p>
            <video width="560" height="315" controls src={putinVideo} />
        </Container>
    )
}
