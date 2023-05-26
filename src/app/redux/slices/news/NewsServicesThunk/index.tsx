import { axios } from '@lib/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface IGetNews {
    skip: number
    limit: number
    filterStr?: string
}

class NewsServicesThunk {
    getNews = createAsyncThunk(
        'news',
        async ({ skip = 0, limit = 10, filterStr = '' }: IGetNews) => {
            let query

            if (filterStr) {
                query = `&filterStr=${filterStr}`
            } else {
                query = ''
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

    postNews = createAsyncThunk(
        'postNews',
        async ({ skip, limit }: { skip: number; limit: number }) => {
            const res = await axios.get(`news?skip=${skip}&limit=${limit}`)

            return {
                data: res.data,
                documentsCount: res.headers['x-total-count'],
            }
        }
    )
}

export const NewsServices = new NewsServicesThunk()
