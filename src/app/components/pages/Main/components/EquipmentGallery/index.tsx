import { Container } from '@mui/material'

import style from './style.module.scss'

export const EquipmentGallery = () => {
    return (
        <Container maxWidth="xl" className={style.EquipmentGallery}>
            <div>
                <img alt="Оборудование" />
                <p>Современное сварочное оборудование</p>
            </div>
            <div>
                <img alt="Аудитории" />
                <p>Светлые отремонтированные аудитории</p>
            </div>
            <div>
                <img alt="Исследовательсоке оборудование" />
                <p>Уникальное исследовательское оборудование</p>
            </div>
        </Container>
    )
}
