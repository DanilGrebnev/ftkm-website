import iaguana from '@images/green-iguana.jpg'
import { axios } from '@lib/axios'
import { clickToLabelElement } from '@lib/clickToLabelElement'
import { selectFile } from '@lib/selectFile'
import { Button, TextField } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navigate, useNavigate } from 'react-router-dom'

import s from './style.module.scss'

export const OneNewsEditor = () => {
    const { _id } = useParams()

    const navigate = useNavigate()

    const fileRef = useRef<HTMLInputElement>(null)

    const [data, setData] = useState({
        title: '',
        body: '',
        imgName: '',
    })

    const [loading, setLoading] = useState<boolean>(false)

    const [isRedirecting, setRedirecting] = useState<boolean>(false)

    const sendNews = async () => {
        setLoading(true)

        try {
            const res = await axios.post('news', data)

            navigate('/cms/news/' + res.data._id)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    const getOneNews = async (_id: string) => {
        try {
            const res = await axios.get('news/' + _id)

            const { title, body, imgName } = res.data

            setData({ title, body, imgName })
        } catch (error) {
            console.log(error)
        }
    }

    const sendFiles = async (
        e: React.SyntheticEvent<HTMLInputElement, Event>,
        _id: string | undefined
    ) => {
        const target = e.target as HTMLInputElement

        const formData = new FormData()

        let img: Blob

        if (target.files) {
            img = target.files[0]

            formData.set('img', img)

            const res = await axios.post(`/news/uploadImage`, formData)

            setData({ ...data, imgName: res.data })
        }
    }

    const removeImg = async (imgName: string) => {
        try {
            const res = await axios.put(
                `/news/removeImg?imgName=${data.imgName}&newsID=${_id}`
            )

            const { title, body, imgName } = res.data

            setData({ title, body, imgName })
        } catch (err) {
            console.log(err)
        }
    }

    const editNews = async ({ title, body, imgName }: typeof data) => {
        try {
            const response = await axios.put(`news/${_id}`, {
                title,
                body,
                imgName,
            })

            console.log(response)

            setRedirecting(true)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (_id) {
            setLoading(true)

            getOneNews(_id).finally(() => setLoading(false))
        }
    }, [_id])

    if (isRedirecting) {
        return <Navigate to="/cms/news" replace={true} />
    }

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
