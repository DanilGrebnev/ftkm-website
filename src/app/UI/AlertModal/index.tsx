import { Alert, Collapse } from '@mui/material'
import React from 'react'

import { IAlertModal } from './interface'

export const AlertModal: React.FC<IAlertModal> = ({
    title,
    type,
    showModal,
}) => {
    React.useEffect(() => {
        console.log(type)
    }, [type])

    return (
        <Collapse in={showModal}>
            <Alert severity={type}>{title}</Alert>
        </Collapse>
    )
}
