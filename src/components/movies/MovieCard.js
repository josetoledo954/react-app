import { Link } from "react-router-dom"
import { useDarkMode}  from "../../context/darkModeContext"
import { useFavContext } from "../../context/favContext"

const MovieCard = ( props ) => {

    const {id, title, director, year, duration} = props.movie


  const darkMode = useDarkMode()
  const {addToFavorites} = useFavContext()


  const addHandler = () => {
    addToFavorites({id, title})
  }
   
  console.log(darkMode);

  return (
    <div className="border-solid border-current border-2 h-80 w-52 m-10">
        <div> {title} </div>
        {/* <button onClick={() => {addToFavorites(id)}} className="">agregar a favoritos</button> */}
        <button onClick={addHandler}>agregar a favoritos</button>
        <div> {director} </div>
        <div> {year} </div>
        <div> {duration} </div>

        <Link className="border-solid border-current border-2" to={`/pelicula/${id}`}>Descripcion</Link>
        <strong> DarkMode: {darkMode ? "TRUE" : "FALSE" }</strong>
    </div>
  )
}

export default MovieCard