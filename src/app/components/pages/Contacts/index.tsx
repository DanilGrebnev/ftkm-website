import { withSuspense } from '@HOC/withSuspense'
import { ButtonAndContainer } from '@UI/ButtonAndContainer'
import { LoadingCircle } from '@UI/LoadingCircle'
import { useSetDocumentTitle } from '@hooks/useSetDocumentTitle'
import { Container } from '@mui/material'
import React from 'react'

import { Footer } from '../Main/components'
import { Address } from './components/Address'
import { ContactInformation } from './components/ContactInformation/inedx'
import { WorkingMode } from './components/WorkingMode'
import s from './style.module.scss'

const YandexMap = withSuspense(
    React.lazy(() => import('@UI/YandexMap/inedx')),
    <LoadingCircle />
)

const Contacts = () => {
    const title = 'МиТЛП | Контакты'

    useSetDocumentTitle({ title })

    return (
        <section
            id="ContactsBlock"
            className={s.contactsBlock}
        >
            <Container
                maxWidth="xl"
                className={s.container}
            >
                <h1>Контактная информация</h1>

                <section className={s.content}>
                    <Address />
                    <WorkingMode />
                    <ContactInformation />
                </section>

                <YandexMap />
            </Container>
            <ButtonAndContainer
                textUpperCase={true}
                className="Questions"
                href="https://welcome.vstu.ru/feedback/send-question/"
                text="Есть вопрос? Задай его нам!"
            />
            <Footer />
        </section>
    )
}

export default Contacts
