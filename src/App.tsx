import { Header } from '@components/Ordinary/Header'
import { Main } from '@components/pages/Main'
import { NewsBlog } from '@components/pages/NewsBlog'
import { Route, Routes } from 'react-router-dom'

import './App.scss'

export const App = () => (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="news" element={<NewsBlog />} />
        </Routes>
    </div>
)


