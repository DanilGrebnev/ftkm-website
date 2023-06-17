import React from 'react'

/**
 * Хук устанавливает заголовок страницы
 * при её рендере
 */
export const useSetDocumentTitle = (title: string) => {
    React.useEffect(() => {
        document.title = title
    }, [])
}
