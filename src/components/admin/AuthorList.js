import AuthorCard from "./AuthorCard"
import { AuthorContext } from "../../contexts/AuthorContext"
import { useContext } from "react"

function AuthorList() {

    const {authors} = useContext(AuthorContext);

    if (authors === null || authors.length === 0){
        return <h3>No hay ningun author</h3>
    }

    return (
        <div className="AuthorList">
            {authors.map( (author) => (
               <AuthorCard author={author} key={author.id}/>
            ))}
        </div>
    )
}

export default AuthorList