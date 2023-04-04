import { MouseEvent, useState } from 'react'

export const useToggleBurgerMenu = () => {
    const [isActive, setIsActive] = useState<null | HTMLElement>(null)

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setIsActive(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setIsActive(null)
    }

    return { isActive, handleOpenNavMenu, handleCloseNavMenu }
}
