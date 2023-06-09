import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'

const SimpleBackdrop: React.FC<{ open: boolean }> = ({ open }) => {
    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export { SimpleBackdrop as Backdrop }
