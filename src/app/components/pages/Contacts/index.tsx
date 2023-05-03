import { YandexMap } from '@UI/YandexMap/inedx'
import { Container } from '@mui/material'

import { Footer } from '../Main/components'
import { Questions } from '../Main/components'
import { Address } from './components/Address'
import { ContactInformation } from './components/ContactInformation/inedx'
import { WorkingMode } from './components/WorkingMode'
import s from './style.module.scss'

export const Contacts = () => {
    return (
        <section id="ContactsBlock" className={s.contactsBlock}>
            <Container maxWidth="xl" className={s.container}>
                <h1>Контактная информация</h1>
                <section className={s.content}>
                    <Address />
                    <WorkingMode />
                    <ContactInformation />
                </section>
                <YandexMap />
            </Container>
            <Questions />
            <Footer />
        </section>
    )
}
