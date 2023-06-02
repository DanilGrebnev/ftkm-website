import { LoadingButton } from '@mui/lab'
import React, { useRef } from 'react'

import s from './s.module.scss'

export const UploadFilesBtn: React.FC = () => {
    const ref = useRef<HTMLInputElement>(null)

    const onClick = () => {
        ref?.current?.click()
    }

    return (
        <div>
            <LoadingButton
                onClick={onClick}
                children="Загрузить файлы"
            />
            <input
                className={s.input}
                type="file"
                ref={ref}
            />
        </div>
    )
}
