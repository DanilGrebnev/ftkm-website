import { Grid } from '@components/elements/blocks/Grid'

import style from './style.module.scss'

export const EquipmentGallery = () => {
    return (
        <Grid className={style.EquipmentGallery}>
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
        </Grid>
    )
}
