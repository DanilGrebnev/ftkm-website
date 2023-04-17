import image1 from '@images/1.jpg'
import image2 from '@images/2.jpg'
import image3 from '@images/3.jpg'
import { Container } from '@mui/material'

import style from './style.module.scss'

export const EquipmentGallery = () => {
    return (
        <Container maxWidth="xl" className={style.EquipmentGallery}>
            <div>
                <img loading="lazy" src={image1} alt="Оборудование" />
                <p>Современное сварочное оборудование</p>
            </div>
            <div>
                <img loading="lazy" src={image2} alt="Аудитории" />
                <p>Светлые отремонтированные аудитории</p>
            </div>
            <div>
                <img loading="lazy" src={image3} alt="Исследовательсоке оборудование" />
                <p>Уникальное исследовательское оборудование</p>
            </div>
        </Container>
    )
}
