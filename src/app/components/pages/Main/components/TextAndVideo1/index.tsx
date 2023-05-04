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
                    "Сегодня работа сотен и тысяч горянков и металлургов во
                    многом определяют динамику российской экономики",
                </strong>
                - сказал Владимир Владимирович Путин о металлургии.
            </p>
            <video controls src={putinVideo} />
        </Container>
    )
}
