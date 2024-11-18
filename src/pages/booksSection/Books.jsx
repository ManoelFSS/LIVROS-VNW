import S from "./Styles.module.scss";
import Title from "../../components/title/Title";
import BookCard from "../../components/cards/bookCard/BookCard";
import { useContext } from "react";
import { BooksContext } from "../../context/BooksContext.jsx";


const Books = () => {

    const { books, loading} = useContext(BooksContext);

    console.log(books)

    if (loading) {
        return (
            <section 
                    className={S.container}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                    }}
                >
                <p>Carregando...</p>
            </section>
        );
    }

    if (!books.length)  {
        return (
            <sectiom 
                className={S.container}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <p>Nenhum livro encontrado.</p>
            </sectiom>
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
                            title={book.title || "Título não disponível"}
                            autor={book.author_name ? book.author_name.slice(0, 1).join(", ") : "Autor não informado"}
                            genre={book.subject ? book.subject.slice(0, 1).join(", ") : "Gênero não especificado"}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Books;
