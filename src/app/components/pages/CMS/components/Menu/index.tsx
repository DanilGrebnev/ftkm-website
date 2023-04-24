import { Paper } from '@mui/material'
import { NavLink } from 'react-router-dom'

import './menu.scss'
import s from './style.module.scss'

export const Menu = () => {
    return (
        <Paper component="section" elevation={4} className={`CMS-Menu ${s.Menu}`}>
            <NavLink to="news">Новости</NavLink>
            <NavLink to="other">Other</NavLink>
        </Paper>
    )
}
