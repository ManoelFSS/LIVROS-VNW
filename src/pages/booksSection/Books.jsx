import S from "./Styles.module.scss";
import Title from "../../components/title/Title";
import BookCard from "../../components/cards/bookCard/BookCard";
import { useContext } from "react";
import { BooksContext } from "../../context/BooksContext.jsx";


const Books = () => {

    const { books, loading, bookSearch} = useContext(BooksContext);

    if (loading) {
        return (
            <section 
                    className={S.container}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "calc(100vh - 12vh)",
                    }}
                >
                <img style={{width: "70px"}} src="https://agrimachinery.nic.in/Highcharts/throbber_12.gif" alt="" />
            </section>
        );
    }

    if (!books.length)  {
        return (
            <section
                className={S.container}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "calc(100vh - 12vh)",
                }}
            >
                { bookSearch === null ? <p>Faça uma busca</p> : <div className={S.not_found}><h4>Sua busca</h4><p>{bookSearch}</p><span> sem resultado!</span></div> }
            </section>
        )
    }

    return (
        <section className={S.container}>
            <div className={S.container_books}>
                <Title 
                    text="Livros Doados" 
                    color="#000"
                    textAlign="center"
                />
                <div className={S.books_area}>
                    {books.map((book, index) => (
                        <BookCard
                            key={index}
                            image={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST8aQMYwqo2nRqq8Ag8or6qRZaiWD244xJ5g&s" }
                            title={book.title  ? [book.title].slice(0, 1).join(", ") : "Título não disponível"}
                            autor={book.author_name ? book.author_name.slice(0, 1).join(", ") : "Autor não informado"}
                            genre={book.subject ? book.subject.slice(0, 2).join(", ") : "Gênero não especificado"}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Books;
