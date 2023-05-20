import { helperReducer } from './slices/helper'
import { newsReducer } from './slices/news'

export const reducer = {
    news: newsReducer,
    helper: helperReducer,
}
