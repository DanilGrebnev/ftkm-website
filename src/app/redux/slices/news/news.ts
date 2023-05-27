import { createSlice } from '@reduxjs/toolkit'
import { INewsStore } from 'app/interface/News'

import { NewsServicesActions } from './NewsServicesActions'
import { NewsServices } from './NewsServicesThunk'

const newsSlice = createSlice({
    name: 'news',

    initialState: {
        news: [],
        searchMode: false,
        loading: true,
        error: '',
        documentsCount: 0,
        skip: 0,
        limit: 1,
        editNews: {
            body: '',
            title: '',
            imgName: '',
        },
    } as INewsStore,

    reducers: {
        clearState: NewsServicesActions.clearState,

        setInputData: NewsServicesActions.setInputData,
    },

    extraReducers: builder => {
        builder
            .addCase(NewsServices.getNews.fulfilled, (state, action) => {
                state.news.push(...action.payload.data)

                state.documentsCount = +action.payload.documentsCount

                state.loading = false

                state.skip = state.skip += state.limit
            })
            .addCase(NewsServices.getNews.pending, state => {
                state.loading = true
            })
            .addCase(NewsServices.getNews.rejected, (state, action) => {
                state.loading = false

                state.error = action.payload
            })
            .addCase(NewsServices.postNews.pending, state => {
                state.loading = true
            })
            .addCase(NewsServices.postNews.fulfilled, state => {
                state.loading = false
            })
            .addCase(NewsServices.postNews.rejected, (state, action) => {
                state.error = action.payload
            })
            .addCase(NewsServices.sendFile.pending, state => {})
            .addCase(NewsServices.sendFile.fulfilled, (state, action) => {
                state.editNews.imgName = action.payload
            })
            .addCase(NewsServices.sendFile.rejected, (state, action) => {})
    },
})

export const { clearState, setInputData } = newsSlice.actions
export const newsReducer = newsSlice.reducer
