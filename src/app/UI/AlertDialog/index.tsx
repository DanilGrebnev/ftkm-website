import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import React from 'react'

import { IAlertDialog } from './interface'

const Transition = React.forwardRef(TransitionFn)

export const AlertDialog: React.FC<IAlertDialog> = ({
    open,
    dialogTitle,
    dialogContent,
    handleClose,
    onClickAction,
}) => {
    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{dialogTitle}</DialogTitle>
                {dialogContent && (
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {dialogContent}
                        </DialogContentText>
                    </DialogContent>
                )}
                <DialogActions>
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button
                        color="error"
                        onClick={() => {
                            onClickAction()
                            handleClose()
                        }}
                    >
                        Удалить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

function TransitionFn(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return (
        <Slide
            direction="up"
            ref={ref}
            {...props}
        />
    )
}
