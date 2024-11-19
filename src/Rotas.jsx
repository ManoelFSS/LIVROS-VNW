
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Books from './pages/booksSection/Books'

const Rotas = () => {
    return (
        <section  style={{ minHeight: 'calc(100vh - 12vh)' }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
            </Routes>
        </section>
    )
}

export default Rotas