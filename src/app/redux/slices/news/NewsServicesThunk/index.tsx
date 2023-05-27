import { axios } from '@lib/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface IGetNews<N = number> {
    skip?: N
    limit?: N
    filter?: string
}

interface IBody {
    title: string
    body: string
    imgName?: string
}

class NewsServicesThunk {
    getNews = createAsyncThunk(
        'news',
        async ({ skip = 0, limit = 1, filter = '' }: IGetNews) => {
            let query = ''

            if (filter) {
                query = `&filter=${filter}`
            }

            const res = await axios.get(
                `news?skip=${skip}&limit=${limit}${query}`
            )

            return {
                data: res.data,
                documentsCount: res.headers['x-total-count'],
            }
        }
    )

    postNews = createAsyncThunk('postNews', async (body: IBody) => {
        const result = await axios.post('news', body)

        return result
    })

    sendFile = createAsyncThunk(
        'sendFile',
        async (e: React.ChangeEvent<HTMLInputElement>) => {
            const target = e.target as HTMLInputElement

            const formData = new FormData()

            let img: Blob

            if (target.files) {
                img = target.files[0]

                formData.set('img', img)

                const res = await axios.post(`/news/uploadImage`, formData)

                return res.data
            }
        }
    )
}

export const NewsServices = new NewsServicesThunk()
