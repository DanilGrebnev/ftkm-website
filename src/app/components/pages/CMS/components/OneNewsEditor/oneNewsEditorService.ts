import { axios } from '@lib/axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type id = string | undefined

interface IuseOneNewsEditorService {
    _id: id
}

export const useOneNewsEditorService = ({ _id }: IuseOneNewsEditorService) => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState<boolean>()

    const [data, setData] = useState({
        title: '',
        body: '',
        imgName: '',
    })

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
        _id: id
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

            navigate('/cms/news')
        } catch (err) {
            console.log(err)
        }
    }

    return {
        loading,
        data,
        sendFiles,
        sendNews,
        removeImg,
        setData,
        setLoading,
        getOneNews,
        editNews,
    }
}
