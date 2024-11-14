import S from "./Styles.module.scss"
import { Link } from "react-router-dom";
import Logo from "../../assets/livro-logo.png"

// icons
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
    return (
        <header className={S.header}>

            <section className={S.container_header}>
                <section>
                    <img 
                        className={S.logo} 
                        src={Logo}
                        alt="logo livro-vnw" 
                    />
                    <h1 
                        className={S.title}
                    >   
                        Livros Vai na Web
                    </h1>
                </section>
                <nav>
                    <div className={S.menuArea}>
                        <ul className={S.list}>
                            <Link className={S.link} t0="/"><li>Início</li></Link>
                            <Link className={S.link} t0="/livrosDoados"><li>Livros Doados</li></Link>
                            <Link className={S.link} t0="/queroDpar"><li>Quero Doar</li></Link>
                        </ul>
                    </div>
                    <div className={S.searchBar}>
                        <input 
                            className={S.search}
                            type="text" 
                        />
                        <IoSearchSharp className={S.icon} />
                    </div>
                </nav>
            </section>

            <sectio className={S.banner}>
                <div>
                    <p className={S.paragrafo}>
                        VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO.
                    </p>
                </div>
            </sectio>

        </header>
    )
}

export default Header;