import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export const LoadingCircle = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    )
}
