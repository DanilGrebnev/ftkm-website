import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'

interface ICirkle {
    style?: React.CSSProperties
}

export const LoadingCircle: React.FC<ICirkle> = ({ style }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ...style,
            }}
        >
            <CircularProgress />
        </Box>
    )
}
