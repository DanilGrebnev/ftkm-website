import { axios } from '@lib/axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { INewsStore } from 'app/interface/News'

import { getNews } from './thunks/newsThunk'

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [],
        searchMode: false,
        loading: true,
        error: false,
        documentsCount: 0,
    } as INewsStore,
    reducers: {
        clearState(state) {
            state.news = []
        },
        setSearchMode(state, action) {
            console.log(action.payload)
            state.searchMode = action.payload
        },
    },

    extraReducers: builder => {
        builder
            .addCase(getNews.fulfilled, (state, action) => {
                state.news.push(...action.payload.data)

                state.documentsCount = +action.payload.documentsCount

                state.loading = false

                state.error = false
            })
            .addCase(getNews.pending, state => {
                state.loading = true

                state.error = false
            })
            .addCase(getNews.rejected, state => {
                state.loading = false

                state.error = true
            })
    },
})

export const { clearState, setSearchMode } = newsSlice.actions
export const newsReducer = newsSlice.reducer
