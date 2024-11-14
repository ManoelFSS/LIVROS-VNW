import React, { useState, useEffect } from "react";
import S from "./Styles.module.scss"
import { Link } from "react-router-dom";
import Logo from "../../assets/livro-logo.png"

// icons
import { AiFillCloseSquare } from "react-icons/ai";
import { IoSearchSharp, IoMenu  } from "react-icons/io5";

const Header = () => {

    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 500) {
                setToggle(false); // Fecha o menu automaticamente em telas grandes
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
                <nav style={{right: toggle ?  "-250px": "0" }}>
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
                { toggle ? 
                    <IoMenu 
                        className={S.toggle}
                        onClick={() => setToggle(!toggle)}
                    /> :
                    <AiFillCloseSquare 
                        className={S.toggle}
                        onClick={() => setToggle(!toggle)}
                    />
                }
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