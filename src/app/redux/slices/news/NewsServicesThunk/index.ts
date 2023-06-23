import { globalVariables } from '@globalVariables'
import { IGetNews } from '@interfaces/News'
import { IBody } from '@interfaces/News'
import { TChangeInputEvent } from '@interfaces/react'
import { axios } from '@lib/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { TEditNews } from './interface'

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

            const URL = `news?skip=${skip}&limit=${limit}${query}`

            const res = await axios.get(URL)

            return {
                data: res.data,
                documentsCount: res.headers['x-total-count'],
            }
        }
    )

    postNews = createAsyncThunk('postNews', async (body: IBody) => {
        const res = await axios.post('news', body)

        return res
    })

    editNews = createAsyncThunk(
        'editNews',
        async ({ body, _id }: TEditNews) => {
            const URL = 'news/' + _id

            const res = await axios.put(URL, body)

            return res
        }
    )

    getOneNews = createAsyncThunk('getOneNews', async (_id: string) => {
        const URL = 'news/' + _id

        const res = await axios.get(URL)

        return res
    })

    deleteNews = createAsyncThunk('deleteNews', async (_id: string) => {
        const URL = 'news/' + _id

        const res = await axios.delete(URL)

        return res
    })

    //? На этапе внедрения
    sendFile = createAsyncThunk('sendFile', async (e: TChangeInputEvent) => {
        const target = e.target as HTMLInputElement

        const formData = new FormData()

        let img: Blob

        if (target.files) {
            img = target.files[0]

            formData.set('img', img)

            const res = await axios.post(`/news/uploadImage`, formData)

            return res.data
        }
    })
}

export const NewsServices = new NewsServicesThunk()
