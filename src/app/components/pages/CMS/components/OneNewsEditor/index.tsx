import { globalVariables } from '@globalVariables'
import { clickToLabelElement } from '@lib/clickToLabelElement'
import { Button } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

import { BodyInput } from './components/BodyInput'
import { ImgInput } from './components/ImgInput'
import { SendButton } from './components/SendButton'
import { TitleInput } from './components/TitleInput'
import { useOneNewsEditorService } from './oneNewsEditorService'
import s from './style.module.scss'

export const OneNewsEditor = () => {
    const { _id } = useParams()

    const fileRef = useRef<HTMLInputElement>(null)

    const { data, loading, getOneNews, removeImg, sendFiles, setLoading } =
        useOneNewsEditorService({ _id })

    useEffect(() => {
        if (_id) {
            setLoading(true)

            getOneNews(_id).finally(() => setLoading(false))
        }
    }, [_id])

    return (
        <div className={s.EditorContainer}>
            <div>Изображение новости</div>
            {data.imgName && (
                <img
                    className={s.previewImg}
                    alt="изображение"
                    src={globalVariables.URL + data.imgName}
                />
            )}
            <div className={s.fileInfo}>
                {!data.imgName ? (
                    <Button
                        onClick={() => clickToLabelElement(fileRef)}
                        variant="outlined"
                        children="выбрать файл"
                    />
                ) : (
                    <Button
                        onClick={() => removeImg(data.imgName)}
                        variant="outlined"
                        color="error"
                        children="Удалить файл"
                    />
                )}
                <div>
                    {!data.imgName ? 'файл не выбран' : 'название файла: '}
                    <strong>{data.imgName}</strong>
                </div>
            </div>

            <ImgInput
                // _id={_id}
                fileRef={fileRef}
            />

            <TitleInput />

            <BodyInput />

            <SendButton id={_id} />
        </div>
    )
}
