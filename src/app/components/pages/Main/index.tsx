import {
    Admission,
    CardList,
    CareerOpportunities,
    DepartmentSpecialists,
    EquipmentGallery,
    Footer,
    Hero,
    Partners,
    Questions,
    TextAndVideo1,
    TextAndVideo2,
    UniversityInfo,
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
            {/* <UniversityInfo /> */}
            <Partners />
            <DepartmentSpecialists />
            <Questions />
            <Footer />
        </section>
    )
}
