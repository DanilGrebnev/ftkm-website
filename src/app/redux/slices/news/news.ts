import { API_RESPONSES } from '@API_RESPONSES'
import { globalVariables } from '@globalVariables'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { INewsDataResponse, INewsItem, INewsStore } from 'app/interface/News'

import { NewsServicesActions } from './NewsServicesActions'
import { NewsServices } from './NewsServicesThunk'

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
        skip: globalVariables.limit,
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

        setSkip(state) {
            state.skip = state.skip + globalVariables.limit
        },

        clearSkip(state) {
            state.skip = globalVariables.limit
        },
    },

    extraReducers: builder => {
        builder
            //Получение новостей
            .addCase(NewsServices.getNews.fulfilled, (state, action) => {
                const news = action.payload.data.map((news: INewsItem) => {
                    news.isDeleteLoading = false

                    return news
                })

                state.news.push(...news)

                state.documentsCount = Number(action.payload.documentsCount)

                state.loading = false

                state.getNewsError = false
            })
            .addCase(NewsServices.getNews.pending, state => {
                state.loading = true
            })
            .addCase(NewsServices.getNews.rejected, (state, action) => {
                state.loading = false

                state.getNewsError = true
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

                state.fetchNews = false

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

export const {
    clearState,
    setInputData,
    closeModal,
    clearNewsFields,
    toggleDeleteLoading,
    setSkip,
    clearSkip,
} = newsSlice.actions

export const newsReducer = newsSlice.reducer
