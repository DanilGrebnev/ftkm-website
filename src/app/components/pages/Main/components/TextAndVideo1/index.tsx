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
                    Для того, чтобы работать эффективно, нам нужны безусловно кадры высшей
                    квалификации, и это важнейшее направление нашей деятельности",
                </strong>
                - сказал Владимир Владимирович Путин про нехватку квалифицированных сварщиков.
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
