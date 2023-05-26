import { helperReducer } from './slices/helper/helper'
import { newsReducer } from './slices/news/news'

export const reducer = {
    news: newsReducer,
    helper: helperReducer,
}
