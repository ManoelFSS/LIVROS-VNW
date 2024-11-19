import React, { useState, useEffect } from "react";
import S from "./Styles.module.scss"
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/livro-logo.png"
import { useContext } from "react";
import { BooksContext } from "../../context/BooksContext.jsx";

// icons
import { AiFillCloseSquare } from "react-icons/ai";
import { IoSearchSharp, IoMenu  } from "react-icons/io5";

const Header = () => {

    const navigate = useNavigate();

    const [toggle, setToggle] = useState(true);
    const { setBookSearch,  setLoading  } = useContext(BooksContext);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const handleResize = () => {
            const nav = document.querySelector("nav");
            nav.classList.remove(S.activeToggle);
            setToggle(true);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const hendleSearch = () => {
        event.preventDefault();
        navigate("/books")
        setLoading(true);
        if (search === "") {
            setBookSearch(null);
            setLoading(false);
            return;
        }
        setBookSearch(search);
        setSearch("");
    };

    const hendlToggle = () => {
        const nav = document.querySelector("nav");
        nav.classList.toggle(S.activeToggle);
        setToggle(!toggle);
    }

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
                            <Link onClick={() => hendlToggle()} className={S.link} to="/"><li>Início</li></Link>
                            <Link onClick={() => {hendlToggle(), setBookSearch("books"), setLoading(true)}} className={S.link} to="/books"><li>Livros Doados</li></Link>
                            <Link onClick={() => hendlToggle()} className={S.link} to="/queroDpar"><li>Quero Doar</li></Link>
                        </ul>
                    </div>
                    <div className={S.searchBar}>
                        
                        <input 
                            className={S.search}
                            type="text" 
                            value={search}
                            placeholder="O que você procura?"
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && hendleSearch()}
                        />
                        
                        <div 
                            className={S.searchIcon} 
                            style={{backgroundColor: search !== "" ? "#013559" : "transparent"}}
                        >
                            <IoSearchSharp 
                                className={S.icon} 
                                onClick={() => hendleSearch()}
                            />
                        </div>
                    </div>
                </nav>
                { toggle ? 
                    <IoMenu 
                        className={S.toggle}
                        onClick={() => hendlToggle()}
                    /> 
                    :
                    <AiFillCloseSquare 
                        className={S.toggle}
                        onClick={() => hendlToggle()}
                    />
                }
            </section>
            
        </header>
    )
}

export default Header;