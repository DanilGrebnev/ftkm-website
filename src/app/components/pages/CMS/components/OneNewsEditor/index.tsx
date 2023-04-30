import { axios } from '@lib/axios'
import { clickToLabelElement } from '@lib/clickToLabelElement'
import { selectFile } from '@lib/selectFile'
import { Button, TextField } from '@mui/material'
import { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

import s from './style.module.scss'

export const OneNewsEditor = () => {
    const { _id } = useParams()

    const fileRef = useRef<HTMLInputElement>(null)

    const [file, setFile] = useState<any>(null)

    const [title, setTitle] = useState<string>('')

    const [body, setBody] = useState<string>('')

    const sendFiles = async () => {
        const formData = new FormData()

        formData.set('img', file)

        formData.set('title', title)

        formData.set('body', body)

        const res = await axios.post('/news', formData)

        console.log(res)
    }

    return (
        <div className={s.EditorContainer}>
            <div>Изображение новости</div>
            <div className={s.fileInfo}>
                {!file ? (
                    <Button
                        onClick={() => clickToLabelElement(fileRef)}
                        variant="outlined"
                    >
                        Выбрать файл
                    </Button>
                ) : (
                    <Button
                        onClick={() => setFile(null)}
                        variant="outlined"
                        color="error"
                    >
                        Удалить файл
                    </Button>
                )}
                <div>
                    {!file ? 'файл не выбран' : 'название файла: '}
                    <strong>{file?.name}</strong>
                </div>
            </div>
            <input
                ref={fileRef}
                accept=".jpg,.jpeg,.png"
                onChange={e => selectFile(e, setFile)}
                name="img"
                id="file"
                type="file"
            />
            <TextField
                value={title}
                className={s.input}
                label="Заголовок"
                variant="outlined"
                name="title"
                onChange={(e: any) => setTitle(e.target.value)}
            />
            <TextField
                value={body}
                onChange={(e: any) => setBody(e.target.value)}
                className={s.textarea}
                label="Текст новости"
                multiline
                minRows={8}
                maxRows={20}
            />
            <Button
                onClick={sendFiles}
                className={s.btnSubmit}
                variant="contained"
            >
                Отправить
            </Button>
        </div>
    )
}
