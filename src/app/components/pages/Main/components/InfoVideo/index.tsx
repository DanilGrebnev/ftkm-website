import { Container } from '@mui/material'

import style from './style.module.scss'

export const InfoVideo = () => {
    return (
        <Container className={`InfoVideo ${style.InfoVideo}`} maxWidth="xl">
            <h2>Информация об университете</h2>
            <iframe
                loading="lazy"
                width="100%"
                height="720"
                src="https://www.youtube.com/embed/XT8NXBndIVs"
                title="Информация о ВолгГТУ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </Container>
    )
}
