import React from 'react'

/**
 * Вешает обработчик события на документ
 * принимает в себя ти обработчика, например "click"
 * функцию, которая будет срабатывать при сраюатывании обработчика
 * options = настройки обработчика
 */
export const WindowEvent = ({ type, listener, options }: IProps) => {
    React.useEffect(() => {
        document.addEventListener(type, listener, options)

        return () => document.removeEventListener(type, listener, options)
    }, [])

    return null
}

interface IProps {
    type: keyof DocumentEventMap
    listener: any
    options?: boolean | AddEventListenerOptions | undefined
}
