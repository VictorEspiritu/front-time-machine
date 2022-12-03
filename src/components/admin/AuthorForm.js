import { useState, useContext } from "react";
import { AuthorContext } from "../../contexts/AuthorContext";

function AuthorForm() {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateBirth, setDateBirth] = useState("");
    const [profesion, setProfesion] = useState("");
    const [summary, setSummary] = useState("");
    const [log, setLog] = useState("");

    const {createAuthor} = useContext(AuthorContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAuthor = {
            name,
            lastName,
            dateBirth,
            profesion,
            summary,
            log
        };
        createAuthor(newAuthor);
        setName('')
        setLastName('')
        setDateBirth('')
        setProfesion('')
        setSummary('')
        setLog('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <span>Nombres</span><input placeholder="Ingrese los nombres" onChange={(e) => setName(e.target.value)} value={name} autoFocus/><br/>
            <span>Apellidos</span><input placeholder="Ingrese los apellidos" onChange={(e) => setLastName(e.target.value)} value={lastName}/><br/>
            <span>Fecha de Nacimiento</span><input placeholder="Ingrese la fecha de Nacimiento" onChange={(e) => setDateBirth(e.target.value)} value={dateBirth}/><br/>
            <span>Profesiones</span><input placeholder="Ingrese las profesiones separadas por coma" onChange={(e) => setProfesion(e.target.value)} value={profesion}/><br/>
            <span>Resumen</span><textarea placeholder="Ingrese el resumen" onChange={(e) => setSummary(e.target.value)} value={summary}></textarea> <br/>
            <span>Registros</span><input placeholder="Ingrese los hechos relevantes asociados" onChange={(e) => setLog(e.target.value)} value={log}/><br/>
            <button>Guardar</button>
        </form>
    )

}

export default AuthorForm;