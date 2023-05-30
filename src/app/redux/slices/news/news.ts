import { API_RESPONSES } from '@API_RESPONSES'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { INewsStore } from 'app/interface/News'
import { INewsDataResponse } from 'app/interface/News'

import { NewsServicesActions } from './NewsServicesActions'
import { NewsServices } from './NewsServicesThunk'

const newsSlice = createSlice({
    name: 'news',

    initialState: {
        news: [],
        loading: true,
        fetchNews: false,
        imgLoading: false,
        showNewsResponseModal: false,
        newsResponseModalContent: '',
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
    },

    extraReducers: builder => {
        builder
            //Получение новостей
            .addCase(NewsServices.getNews.fulfilled, (state, action) => {
                state.news.push(...action.payload.data)

                state.documentsCount = Number(action.payload.documentsCount)

                state.loading = false
            })
            .addCase(NewsServices.getNews.pending, state => {
                state.loading = true
            })
            .addCase(NewsServices.getNews.rejected, (state, action) => {
                state.loading = false

                state.error = action.payload
            })
            //Получение одной новости
            .addCase(
                NewsServices.getOneNews.fulfilled,
                (state, action: PayloadAction<INewsDataResponse>) => {
                    state.loading = false

                    const { title, imgName, body } = action.payload.data

                    state.newsFields = { title, imgName, body }
                }
            )
            .addCase(NewsServices.getOneNews.pending, state => {
                state.loading = true
            })
            .addCase(NewsServices.getOneNews.rejected, (state, action) => {})
            //Редактирование новостей
            .addCase(NewsServices.editNews.fulfilled, (state, action) => {
                state.fetchNews = false

                state.showNewsResponseModal = true

                state.newsResponseModalContent = API_RESPONSES.NEWS_EDIT_OK
            })
            .addCase(NewsServices.editNews.pending, (state, action) => {
                state.fetchNews = true
            })
            .addCase(NewsServices.editNews.rejected, (state, action) => {
                state.error = action.payload

                state.showNewsResponseModal = true

                state.newsResponseModalContent = API_RESPONSES.NEWS_EDIT_ERROR
            })
            //Отправка новостей
            .addCase(NewsServices.postNews.pending, state => {
                state.fetchNews = true
            })
            .addCase(NewsServices.postNews.fulfilled, state => {
                state.fetchNews = false

                state.showNewsResponseModal = true

                state.newsResponseModalContent = API_RESPONSES.NEWS_SEND_OK
            })
            .addCase(NewsServices.postNews.rejected, (state, action) => {
                state.error = action.payload

                state.fetchNews = false

                state.showNewsResponseModal = true

                state.newsResponseModalContent = API_RESPONSES.NEWS_SEND_ERROR
            })
            //Удаление новостей
            .addCase(NewsServices.deleteNews.fulfilled, state => {
                state.loading = false

                state.newsResponseModalContent = API_RESPONSES.NEWS_DELETE_OK
            })
            .addCase(NewsServices.deleteNews.pending, state => {
                state.loading = true
            })
            .addCase(NewsServices.deleteNews.rejected, state => {
                state.loading = false

                state.newsResponseModalContent = API_RESPONSES.NEWS_DELETE_ERROR
            })
            //Отправка изображения
            .addCase(NewsServices.sendFile.pending, state => {
                state.imgLoading = true
            })
            .addCase(NewsServices.sendFile.fulfilled, (state, action) => {
                state.newsFields.imgName = action.payload.data
                state.imgLoading = false
            })
            .addCase(NewsServices.sendFile.rejected, (state, action) => {})
    },
})

export const { clearState, setInputData, closeModal, clearNewsFields } =
    newsSlice.actions

export const newsReducer = newsSlice.reducer
