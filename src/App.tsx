import { withSuspense } from '@HOC/withSuspense'
import { Header } from '@components/Ordinary/Header'
import Contacts from '@components/pages/Contacts'
import { Main } from '@components/pages/Main'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.scss'

const MoreInfo = withSuspense(
    React.lazy(() => import('@components/pages/MoreInfo'))
)

// const Contacts = withSuspense(
//     React.lazy(() => import('@components/pages/Contacts'))
// )

// const NewsBlog = withSuspense(
//     React.lazy(() => import('@components/pages/News'))
// )

// const OneNews = withSuspense(
//     React.lazy(() => import('@components/pages/OneNews'))
// )

export const App = () => (
    <div className="App">
        <Header />
        <Routes>
            <Route
                path="/"
                element={<Main />}
            />

            <Route
                path="moreInfo/*"
                element={<MoreInfo />}
            />

            <Route
                path="contacts"
                element={<Contacts />}
            />
            {/* <Route
                path="news"
                element={<NewsBlog />}
            />
            <Route
                path="news/:_id"
                element={<OneNews />}
            /> */}
        </Routes>
    </div>
)
