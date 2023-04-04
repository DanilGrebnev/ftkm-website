import { Route, Routes } from 'react-router-dom'

import './App.scss'
import { Header } from './app/components/elements/Header'
import { Main } from './app/components/pages/Main'
import { NewsBlog } from './app/components/pages/NewsBlog'

const App = () => {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/news" element={<NewsBlog />} />
                <Route path="*" element={<div>Not found</div>} />
            </Routes>
        </div>
    )
}

export default App
