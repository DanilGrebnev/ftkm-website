import { createSlice } from '@reduxjs/toolkit'
import { INewsStore } from 'app/interface/News'

import { ExtraReducers } from './ExtraReducers'
import { NewsServicesActions } from './NewsServicesActions'

const newsSlice = createSlice({
    name: 'news',

    initialState: {
        news: [],
        getNewsError: false,
        loading: true,
        fetchNews: false,
        imgLoading: false,
        showNewsResponseModal: false,
        newsResponseModalContent: '',
        skip: 0,
        error: '',
        documentsCount: 0,
        newsFields: {
            body: '',
            title: '',
            imgName: '',
        },
    } as INewsStore,

    reducers: {
        clearState: NewsServicesActions.clearState,

        closeModal: NewsServicesActions.closeModal,

        setInputData: NewsServicesActions.setInputData,

        clearNewsFields: NewsServicesActions.clearNewsFields,

        toggleDeleteLoading: NewsServicesActions.toggleDeleteLoading,

        clearSkip: NewsServicesActions.clearSkip,
    },

    extraReducers: ExtraReducers,
})

export const {
    clearState,
    setInputData,
    closeModal,
    clearNewsFields,
    toggleDeleteLoading,
    clearSkip,
} = newsSlice.actions

export const newsReducer = newsSlice.reducer
