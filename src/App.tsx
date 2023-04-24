import { Header } from '@components/Ordinary/Header'
import { Login } from '@components/Smart/Login'
import { Main } from '@components/pages/Main'
import { NewsBlog } from '@components/pages/NewsBlog'
import { Route, Routes } from 'react-router-dom'

import './App.scss'

const App = () => (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/news" element={<NewsBlog />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<div>Not found</div>} />
        </Routes>
    </div>
)

export default App
