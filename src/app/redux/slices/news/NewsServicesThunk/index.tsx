import { globalVariables } from '@globalVariables'
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
        'getNews',
        async ({
            skip = 0,
            limit = globalVariables.limit,
            filter = '',
        }: IGetNews) => {
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

    editNews = createAsyncThunk(
        'editNews',
        async ({ body, _id }: { body: IBody; _id: string }) => {
            const result = await axios.put('news/' + _id, body)

            return result
        }
    )

    getOneNews = createAsyncThunk('getOneNews', async (_id: string) => {
        const result = await axios.get('news/' + _id)

        return result
    })

    deleteNews = createAsyncThunk('deleteNews', async (_id: string) => {
        const result = await axios.delete('news/' + _id)

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
