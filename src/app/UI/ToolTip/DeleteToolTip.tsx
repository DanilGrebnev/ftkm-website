import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton, Tooltip } from '@mui/material'

export const DeleteToolTip = () => {
    return (
        <Tooltip title="Удалить">
            <IconButton>
                <DeleteIcon sx={{ color: 'red' }} />
            </IconButton>
        </Tooltip>
    )
}
