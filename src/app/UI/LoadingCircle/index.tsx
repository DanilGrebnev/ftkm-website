import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'

import { ICircle } from './interface'

export const LoadingCircle: React.FC<ICircle> = ({
    style,
    circularSize,
    fullScreen,
}) => {
    const component = (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ...style,
            }}
        >
            <CircularProgress size={circularSize} />
        </Box>
    )

    return !fullScreen ? (
        component
    ) : (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {component}
        </div>
    )
}
