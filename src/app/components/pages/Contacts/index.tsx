import { ButtonAndContainer } from '@UI/ButtonAndContainer'
import { YandexMap } from '@UI/YandexMap/inedx'
import { useSetDocumentTitle } from '@hooks/useSetDocumentTitle'
import { Container } from '@mui/material'

import { Footer } from '../Main/components'
import { Address } from './components/Address'
import { ContactInformation } from './components/ContactInformation/inedx'
import { WorkingMode } from './components/WorkingMode'
import s from './style.module.scss'

const Contacts = () => {
    useSetDocumentTitle('МиТЛП | Контакты')

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
