import { useState } from "react";
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

    const hendleSearch = (e) => {

        setLoading(true);

        if (search === "") {
            setBookSearch(null);
            setLoading(false);
            return;
        }

        navigate("/books")
        setBookSearch(search);
        setSearch("");
        hendlToggle();
        e.target.blur();

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
                    <Link to={"/"}>
                        <img 
                            className={S.logo} 
                            src={Logo}
                            alt="logo livro-vnw" 
                        />
                    </Link>
                    <h1 
                        className={S.title}
                    >   
                        Livros Vai na Web
                    </h1>
                </section>
                <nav>
                    <section className={S.menuArea}>
                        <ul className={S.list}>
                            <Link onClick={() => hendlToggle()} className={S.link} to="/"><li>Início</li></Link>
                            <Link onClick={() => {hendlToggle(), setBookSearch("books"), setLoading(true)}} className={S.link} to="/books"><li>Livros Doados</li></Link>
                            <Link onClick={() => hendlToggle()} className={S.link} to="/queroDoar"><li>Quero Doar</li></Link>
                        </ul>
                    </section>
                    <div className={S.searchBar}>
                        
                        <input 
                            className={S.search}
                            type="text" 
                            value={search}
                            placeholder="O que você procura?"
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" ? hendleSearch(e) : null} 
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
                <div>
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
                </div>
            </section>
        </header>
    )
}

export default Header;