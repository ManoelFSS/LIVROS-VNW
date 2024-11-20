
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Books from './pages/booksSection/Books'
import Doacoes from './pages/queroDoar/Doacoes'

const Rotas = () => {
    return (
        <section  style={{ minHeight: 'calc(100vh - 12vh)', marginTop: '12vh' }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/queroDoar" element={<Doacoes />} />
            </Routes>
        </section>
    )
}

export default Rotas