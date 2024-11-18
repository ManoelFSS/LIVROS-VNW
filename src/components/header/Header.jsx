import React, { useState, useEffect } from "react";
import S from "./Styles.module.scss"
import { Link } from "react-router-dom";
import Logo from "../../assets/images/livro-logo.png"
import { useContext } from "react";
import { BooksContext } from "../../context/BooksContext.jsx";

// icons
import { AiFillCloseSquare } from "react-icons/ai";
import { IoSearchSharp, IoMenu  } from "react-icons/io5";

const Header = () => {

    const [toggle, setToggle] = useState(true);
    const { setBookSearch,  setLoading  } = useContext(BooksContext);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 500) {
                setToggle(false); // Fecha o menu automaticamente em telas grandes
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const hendleSearch = () => {
        setLoading(true);
        setBookSearch(search);
    };

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
                            <Link className={S.link} to="/"><li>Início</li></Link>
                            <Link className={S.link} to="/books"><li>Livros Doados</li></Link>
                            <Link className={S.link} to="/queroDpar"><li>Quero Doar</li></Link>
                        </ul>
                    </div>
                    <div className={S.searchBar}>
                        <input 
                            className={S.search}
                            type="text" 
                            placeholder="O que você procura?"
                            onChange={(e) =>  setSearch(e.target.value)}
                        />
                        <IoSearchSharp 
                            className={S.icon} 
                            onClick={() => hendleSearch()}
                        />
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
            
        </header>
    )
}

export default Header;