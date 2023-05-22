import { ImgComponent } from '@components/Ordinary/CardMedia'
import { Container } from '@mui/material'

import { data } from './data'
import style from './style.module.scss'

export const EquipmentGallery = () => {
    return (
        <Container
            component="section"
            maxWidth="xl"
            className={style.EquipmentGallery}
        >
            <>
                {data.map((data, i) => (
                    <ImgComponent
                        key={i}
                        {...data}
                    />
                ))}
            </>
        </Container>
    )
}
