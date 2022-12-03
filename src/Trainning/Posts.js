import Product from './Product';
import {VscChecklist} from 'react-icons/vsc'

export const Posts = () => {

    return <button onClick={() => {
        console.log('Obteniendo datos del servidor')
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.error(error))
    }}><VscChecklist/> Obtener Datos</button>
}
