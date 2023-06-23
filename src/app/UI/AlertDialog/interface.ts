export interface IAlertDialog {
    open: boolean
    onClickAction: () => void
    handleClose: () => void
    dialogTitle?: string
    dialogContent?: string
}