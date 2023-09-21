import { useParams } from 'react-router'
const Detalle = () => {
    // para poder usar el routing con parametros, se debe usar este hook
    const { id } = useParams()
    // el objeto creado con useParams, obtiene de propiedad el valor q se le asigne
    // en la url desp de los 2 puntos
    console.log(id)
    return <>
        <h3>This is detalle con id en el paramtero de url</h3>
    </>
}

export default Detalle;