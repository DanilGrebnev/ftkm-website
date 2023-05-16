import { Grid } from '@components/containers/Grid'
import logo from '@images/Logo_vstu.png'
import { Link } from 'react-router-dom'

import style from './style.module.scss'

export const Footer = () => {
    return (
        <div className={`Footer ${style.Footer}`}>
            <a href="/">
                <Grid className={style.Grid}>
                    <img
                        alt="VSTU logo"
                        src={logo}
                    />
                    <p>
                        Кафедра{' '}
                        <q style={{ lineHeight: 'normal' }}>
                            Машины и технология литейного производства
                        </q>
                    </p>
                    <p>© 2023 Кафедра "МиТЛП"</p>
                </Grid>
            </a>
        </div>
    )
}
