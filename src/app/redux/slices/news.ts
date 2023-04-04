import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    news: [],
    loading: true,
    error: false,
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        increment(state) {
            state.news = []
        },
    },
})

export const { increment } = newsSlice.actions
export const newsReducer = newsSlice.reducer
