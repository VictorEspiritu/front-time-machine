import { createContext, useState, useEffect } from "react";
import { authors as data } from "../data/Authors";

export const AuthorContext = createContext();

export function AuthorContextProvider(props) {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        setAuthors(data)
    }, []);

    function createAuthor(author) {
        author.id = authors.length;
       setAuthors([...authors, author])
    }

    function deleteAuthor(authorId) {
        console.log('eliminando a', authorId)
        setAuthors(authors.filter(author => author.id !== authorId));
    }

    return (
        <AuthorContext.Provider value={{authors, createAuthor, deleteAuthor}}>
            {props.children}
        </AuthorContext.Provider>
    )
}