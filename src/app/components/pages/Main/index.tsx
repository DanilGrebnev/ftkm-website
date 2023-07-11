import { useSetDocumentTitle } from '@hooks/useSetDocumentTitle'

import {
    Admission,
    CardList,
    CareerOpportunities,
    DepartmentSpecialists,
    DescriptionProfession,
    Footer,
    Hero,
    NewsBlock,
    Partners,
    Questions,
    ScientificDirection,
    SwiperEquipment,
    TextAndVideo1,
    TextAndVideo2,
} from './components'
import style from './style.module.scss'

export const Main = () => {
    const title =
        'Кафедра «Машины и технология литейного производства» | ВолгГТУ'

    useSetDocumentTitle({
        title,
    })

    return (
        <section className={`Main-page ${style.Main || ''}`}>
            <Hero />
            <CardList />
            <DescriptionProfession />
            <TextAndVideo1 />
            <TextAndVideo2 />
            <CareerOpportunities />
            <Admission />
            <SwiperEquipment />
            <Partners />
            <DepartmentSpecialists />
            <ScientificDirection />
            <NewsBlock />
            <Questions />
            <Footer />
        </section>
    )
}
