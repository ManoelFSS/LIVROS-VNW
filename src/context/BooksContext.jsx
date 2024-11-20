import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [bookSearch, setBookSearch] = useState("books");

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get("https://openlibrary.org/search.json", {
                    params: {
                        q: bookSearch,
                        limit: 10,
                    },
                });

                setBooks(response.data.docs || []);

            } catch (error) {
                console.error("Erro ao buscar livros:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [bookSearch]); // Atualiza ao mudar o termo de busca

    return (
        <BooksContext.Provider value={{ books, loading, bookSearch, setLoading, setBookSearch }}>
            {children} 
        </BooksContext.Provider>
    );
};
