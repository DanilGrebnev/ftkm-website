import { axios } from '@lib/axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { INewsStore } from 'app/interface/News'

export const fetchNews = createAsyncThunk(
    'news',
    async ({ skip, limit }: { skip: number; limit: number }) => {
        const res = await axios.get(`news?skip=${skip}&limit=${limit}`)

        return {
            data: res.data,
            documentsCount: res.headers['x-total-count'],
        }
    }
)

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [],
        loading: true,
        error: false,
        documentsCount: 0,
    } as INewsStore,
    reducers: {
        clearState(state) {
            state.news = []
            console.log('Стэйт очищен')
        },
    },

    extraReducers: builder => {
        builder
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.news.push(...action.payload.data)
                state.documentsCount = +action.payload.documentsCount
                state.loading = false
                state.error = false
            })
            .addCase(fetchNews.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchNews.rejected, state => {
                state.loading = false
                state.error = true
            })
    },
})
export const { clearState } = newsSlice.actions
export const newsReducer = newsSlice.reducer
