import { axios } from '@lib/axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { INewsStore } from 'app/interface/News'

import { postNews } from './thunks/newsThunk'

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        data: {
            title: '',
        },
        loading: true,
        error: false,
    },
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(postNews.fulfilled, (state, action) => {
                console.log(action.payload.data)
                console.log('Сработал билдер')
            })
            .addCase(postNews.pending, state => {})
            .addCase(postNews.rejected, (state, action) => {
                console.log(action.payload)
            })
    },
})

// export const {} = newsSlice.actions
export const newsReducer = newsSlice.reducer
