import { useContext } from "react"
import { Link } from "react-router-dom"
import {DarkModeContext}  from "../../context/darkModeContext"
import { FavContext } from "../../context/favContext"

const MovieCard = ( props ) => {

    const {id, title, director, year, duration} = props.movie


  const darkMode = useContext(DarkModeContext)
  const {addToFavorites} = useContext(FavContext)

  const addHandler = () => {addToFavorites(id)}
   
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