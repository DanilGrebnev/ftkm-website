import { clickToLabelElement } from '@lib/clickToLabelElement'
import { Button, TextField } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useOneNewsEditorService } from './oneNewsEditorService'
import s from './style.module.scss'

export const OneNewsEditor = () => {
    const { _id } = useParams()
    const fileRef = useRef<HTMLInputElement>(null)

    const {
        data,
        loading,
        editNews,
        getOneNews,
        removeImg,
        sendFiles,
        sendNews,
        setData,
        setLoading,
    } = useOneNewsEditorService({ _id })

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
                    src={`http://127.0.0.1:3001/${data.imgName}`}
                />
            )}
            <div className={s.fileInfo}>
                {!data.imgName ? (
                    <Button
                        onClick={() => clickToLabelElement(fileRef)}
                        variant="outlined"
                    >
                        Выбрать файл
                    </Button>
                ) : (
                    <Button
                        onClick={() => removeImg(data.imgName)}
                        variant="outlined"
                        color="error"
                    >
                        Удалить файл
                    </Button>
                )}
                <div>
                    {!data.imgName ? 'файл не выбран' : 'название файла: '}
                    <strong>{data.imgName}</strong>
                </div>
            </div>
            <input
                ref={fileRef}
                accept=".jpg,.jpeg,.png"
                onChange={e => sendFiles(e, _id)}
                name="img"
                id="file"
                type="file"
            />
            <TextField
                value={data.title}
                className={s.input}
                label="Заголовок"
                variant="outlined"
                name="title"
                onChange={(e: any) =>
                    setData({ ...data, title: e.target.value })
                }
            />
            <TextField
                value={data.body}
                onChange={(e: any) =>
                    setData({ ...data, body: e.target.value })
                }
                className={s.textarea}
                label="Текст новости"
                multiline
                minRows={8}
                maxRows={20}
            />
            {_id ? (
                <Button
                    onClick={() => editNews(data)}
                    className={s.btnSubmit}
                    variant="contained"
                >
                    изменить
                </Button>
            ) : (
                <Button
                    onClick={sendNews}
                    className={s.btnSubmit}
                    variant="contained"
                >
                    Отправить
                </Button>
            )}
        </div>
    )
}
