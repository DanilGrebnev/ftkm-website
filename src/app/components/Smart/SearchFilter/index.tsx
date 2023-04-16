import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, TextField, Typography } from '@mui/material'

import style from './SearchField.module.scss'

export const SearchFilter = () => {
    return (
        <div className={style.SearchFilter}>
            <TextField
                id="outlined-basic"
                label="Поиск новостей"
                variant="standard"
                fullWidth={true}
            />
        </div>
    )
}
