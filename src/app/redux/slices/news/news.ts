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
        error: false,
        documentsCount: 0,
        skip: 0,
        limit: 1,
    } as INewsStore,

    reducers: {
        clearState: NewsServicesActions.clearState,

        resetSkip: NewsServicesActions.resetSkip,
    },

    extraReducers: builder => {
        builder
            .addCase(NewsServices.getNews.fulfilled, (state, action) => {
                state.news.push(...action.payload.data)

                state.documentsCount = +action.payload.documentsCount

                state.loading = false

                state.error = false

                state.skip = state.skip += state.limit
            })
            .addCase(NewsServices.getNews.pending, state => {
                state.loading = true

                state.error = false
            })
            .addCase(NewsServices.getNews.rejected, state => {
                state.loading = false

                state.error = true
            })
    },
})

export const { clearState } = newsSlice.actions
export const newsReducer = newsSlice.reducer
