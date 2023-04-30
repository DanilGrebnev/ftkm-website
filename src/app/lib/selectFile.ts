import React from 'react'

type TEvent = React.SyntheticEvent<HTMLInputElement, Event>
type TSetFile = React.Dispatch<any>

export const selectFile = (e: TEvent, setFile: TSetFile) => {
    const target = e.target as HTMLInputElement

    if (target?.files) {
        setFile(target.files[0])
    }
}
