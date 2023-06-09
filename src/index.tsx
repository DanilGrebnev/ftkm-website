import { WithAuth } from '@HOC/WithAuth'
import { withSuspense } from '@HOC/withSuspense'
import { LoadingCircle } from '@UI/LoadingCircle'
import { NotFound } from '@UI/NotFound'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

import { App } from './App'
import { store } from './app/redux/store'
import './index.scss'

const container = document.getElementById('root')

const CMS = withSuspense(
    React.lazy(() => import('@components/pages/CMS')),
    <LoadingCircle fullScreen />
)

const Login = withSuspense(
    React.lazy(() => import('@components/pages/Login')),
    <LoadingCircle fullScreen />
)

if (container) {
    const root = createRoot(container)

    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route
                        path="/*"
                        element={<App />}
                    />
                    <Route
                        path="login"
                        element={<Login />}
                    />
                    <Route
                        path="CMS/*"
                        element={<WithAuth Component={CMS} />}
                    />
                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Routes>
            </Provider>
        </BrowserRouter>
    )
}
