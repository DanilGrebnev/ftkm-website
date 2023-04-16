import { Grid } from '@components/containers/Grid'
import logo from '@images/Logo_vstu.png'

import style from './style.module.scss'

export const Footer = () => {
    return (
        <div className={`Footer ${style.Footer}`}>
            <Grid className={style.Grid}>
                <img alt="VSTU logo" src={logo} />
                <p>Кафедра машины и технология литейного производства</p>
                <p>© 2023 Кафедра "МиТЛП"</p>
            </Grid>
        </div>
    )
}
