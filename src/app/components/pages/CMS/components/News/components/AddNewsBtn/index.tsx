import AddCircleIcon from '@mui/icons-material/AddCircle'
import { Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'

import s from './s.module.scss'

export const AddNewsBtn = () => {
    return (
        <Link
            className={s.addBtn}
            to={'newsEditor'}
        >
            <Tooltip
                title="Добавить статью"
                children={
                    <AddCircleIcon
                        sx={{ cursor: 'pointer' }}
                        color="info"
                        fontSize="large"
                    />
                }
            />
        </Link>
    )
}
