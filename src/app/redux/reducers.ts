import { helperReducer } from './slices/helperSlice'
import { newsReducer } from './slices/news'

export const reducer = {
    news: newsReducer,
    helpers: helperReducer,
}
