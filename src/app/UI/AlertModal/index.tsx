import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Collapse from '@mui/material/Collapse'
import Stack from '@mui/material/Stack'
import React from 'react'

interface IAlertModal {
    title?: string
    decription?: string | React.ReactNode
    type?: 'error' | 'success' | 'info' | 'warning'
    showModal?: boolean
}

export const AlertModal: React.FC<IAlertModal> = ({
    title,
    decription,
    type,
    showModal,
}) => {
    return (
        <Collapse in={showModal}>
            <Alert severity={type}>
                <AlertTitle>{title}</AlertTitle>
                {/* {decription} */}
            </Alert>
        </Collapse>
    )
}
