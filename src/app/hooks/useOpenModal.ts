import React from 'react'

export const useOpenModal = () => {
    const [open, setOpen] = React.useState(false)

    const openModal = React.useCallback(() => {
        setOpen(true)
    }, [])

    const closeModal = React.useCallback(() => {
        setOpen(false)
    }, [])

    return {
        open,
        closeModal,
        openModal,
    }
}
