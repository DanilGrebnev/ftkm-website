import { Container } from '@mui/material'

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
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/S0JNqJH_9r0"
                title="Выступление Путина на АСИ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </Container>
    )
}
