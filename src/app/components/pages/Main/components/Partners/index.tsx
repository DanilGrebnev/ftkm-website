import neftemah from '@images/neftemash.png'
import october from '@images/red-october.gif'
import rusal from '@images/rusal.jpg'
import vtz from '@images/vtz_.jpg'
import { Container } from '@mui/material'

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
                <img
                    src={neftemah}
                    loading="lazy"
                    alt="Завод 'Нефтемаш'"
                />
                <img
                    src={october}
                    loading="lazy"
                    alt="Завод 'Красный Октябрь'"
                />
                <img
                    src={rusal}
                    loading="lazy"
                    alt="Завод 'Русал'"
                />
                <img
                    src={vtz}
                    loading="lazy"
                    alt="Волжский Трубный Завод"
                />
            </div>
        </Container>
    )
}
