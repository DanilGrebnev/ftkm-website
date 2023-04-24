import { SearchFilter } from '@components/Smart/SearchFilter'
import { Paper } from '@mui/material'


import s from './style.module.scss'

export const News = () => {
    return (
        <Paper elevation={5} className={`CMS-Body ${s.News}`}>
            <div className={`News-items-container`}>
                <SearchFilter />
            </div>
        </Paper>
    )
}
