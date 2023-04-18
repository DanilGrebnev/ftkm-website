import {
    Admission,
    CardList,
    CareerOpportunities,
    EquipmentGallery,
    Footer,
    Hero,
    InfoVideo,
    JobsFuture,
    Partners,
    Questions,
    TextAndVideo1,
    TextAndVideo2,
} from './components'
import style from './style.module.scss'

export const Main = () => {
    return (
        <section className={`Main-page ${style.Main || ''}`}>
            <Hero />
            <CardList />
            <TextAndVideo1 />
            <TextAndVideo2 />
            <CareerOpportunities />
            <Admission />
            <EquipmentGallery />
            <InfoVideo />
            <JobsFuture />
            <Partners />
            <Questions />
            <Footer />
        </section>
    )
}
