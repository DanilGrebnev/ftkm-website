import { ButtonContainer } from './components/ButtonContainer'
import { NewsContainer } from './components/NewsContainer'
import { AddNewsBtn } from './components/AddNewsBtn'
import s from './style.module.scss'

export const News = () => {
    return (
        <section className={s.news}>
            <div className={s.searchContainer}>
                <AddNewsBtn />
            </div>
            <NewsContainer />
            <ButtonContainer />
        </section>
    )
}
