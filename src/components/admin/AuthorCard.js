import { AuthorContext } from "../../contexts/AuthorContext"
import { useContext } from "react"

function AuthorCard({author}) {

    const {deleteAuthor} = useContext(AuthorContext);

    return (
        <div className="AuthorCard">
            <h2>{author.name + ' ' + author.lastName}</h2>
            <span>{author.dateBirth}</span>
            <span>{author.summary}</span>
            <button onClick={() => deleteAuthor(author.id)}>Eliminar</button>
        </div>
    )
}

export default AuthorCard