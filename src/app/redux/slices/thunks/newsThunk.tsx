import { axios } from '@lib/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface IFetchNews {
    skip: number
    limit: number
    filterStr?: string
}

class NewsServices {
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

    getNews = createAsyncThunk(
        'news',
        async ({ skip, limit, filterStr }: IFetchNews) => {
            let query

            if (filterStr) {
                query = `&filterStr=${filterStr}`
            } else {
                query = ''
            }

            // console.log(`news?skip=${skip}&limit=${limit}${query}`)

            const res = await axios.get(
                `news?skip=${skip}&limit=${limit}${query}`
            )

            return {
                data: res.data,
                documentsCount: res.headers['x-total-count'],
            }
        }
    )
}

export const { postNews, getNews } = new NewsServices()
