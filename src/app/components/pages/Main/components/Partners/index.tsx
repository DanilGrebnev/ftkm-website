import { ImgComponent } from '@components/Ordinary/CardMedia'
import { Container } from '@mui/material'

import { data } from './data'
import style from './style.module.scss'

export const Partners = () => {
    return (
        <Container
            component="section"
            className={`Partners ${style.Partners}`}
            maxWidth="xl"
        >
            <h2>Наши партнёры</h2>
            <h3>На этих предприятиях работают наши выпускники</h3>
            <div className={style.imgWrapper}>
                {data.map(data => (
                    <ImgComponent
                        key={data.src}
                        {...data}
                    />
                ))}
            </div>
        </Container>
    )
}
