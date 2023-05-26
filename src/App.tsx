import { NotFound } from '@UI/NotFound'
import { Header } from '@components/Ordinary/Header'
import Contacts from '@components/pages/Contacts'
import { Main } from '@components/pages/Main'
import { MoreInfo } from '@components/pages/MoreInfo'
import NewsBlog from '@components/pages/NewsBlog'
import OneNews from '@components/pages/OneNews'
import { Route, Routes } from 'react-router-dom'

import './App.scss'

export const App = () => (
    <div className="App">
        <Header />
        <Routes>
            <Route
                path="/"
                element={<Main />}
            />

            <Route
                path="moreinfo/*"
                element={<MoreInfo />}
            />

            <Route
                path="contacts"
                element={<Contacts />}
            />
            <Route
                path="*"
                element={<NotFound />}
            />
            <Route
                path="news"
                element={<NewsBlog />}
            />
            <Route
                path="news/:_id"
                element={<OneNews />}
            />
        </Routes>
    </div>
)
