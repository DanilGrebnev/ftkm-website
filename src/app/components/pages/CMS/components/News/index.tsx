import { SearchFilter } from '@components/Smart/SearchFilter'

import { NewsItem } from './NewsItem'
import s from './style.module.scss'

export const News = () => {
    return (
        <section className={s.news}>
            <SearchFilter />
            <section className={s.newsContainer}>
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </section>
        </section>
    )
}
