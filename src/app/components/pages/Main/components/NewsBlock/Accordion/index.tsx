import { AccordionBlock } from '@UI/Accordion'

import { NewsList } from '../NewsList'
import s from './s.module.scss'

export const Accordion: React.FC = () => {
    return (
        <AccordionBlock
            AccordionClassName={s.accordion}
            DetailsClassName={s.accordionDetails}
            Summary="Посмотреть последние новости"
        >
            <NewsList />
        </AccordionBlock>
    )
}
