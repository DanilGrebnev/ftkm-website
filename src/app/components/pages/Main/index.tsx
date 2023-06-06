import { useSetDocumentTitle } from '@hooks/useSetDocumentTitle'

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
    ScientificDirection,
    SwiperEquipment,
    TextAndVideo1,
    TextAndVideo2,
} from './components'
import style from './style.module.scss'

export const Main = () => {
    useSetDocumentTitle(
        'Кафедра «Машины и технология литейного производства» | ВолгГТУ'
    )

    return (
        <section className={`Main-page ${style.Main || ''}`}>
            <Hero />
            <CardList />
            <TextAndVideo1 />
            <TextAndVideo2 />
            <CareerOpportunities />
            <Admission />
            <SwiperEquipment />
            {/* <EquipmentGallery /> */}
            <Partners />
            <DepartmentSpecialists />
            <ScientificDirection />
            <Questions />
            <Footer />
        </section>
    )
}
