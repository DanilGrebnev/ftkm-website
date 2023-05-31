import React from 'react'

export const useOpenModal = () => {
    const [open, setOpen] = React.useState(false)

    const toggleModal = React.useCallback(() => {
        setOpen(p => !p)
    }, [])

    return {
        open,
        toggleModal,
    }
}
