import { useContext } from "react"
import { Link } from "react-router-dom"
import {DarkModeContext}  from "../../context/darkModeContext"

const MovieCard = ( props ) => {

    const {id, title, director, year, duration} = props.movie


  const darkMode = useContext(DarkModeContext)

  console.log(darkMode);

  return (
    <div className="border-solid border-current border-2 h-80 w-52 m-10">
        <div> {title} </div>
        <div> {director} </div>
        <div> {year} </div>
        <div> {duration} </div>

        <Link className="border-solid border-current border-2" to={`/pelicula/${id}`}>Descripcion</Link>
        <strong> DarkMode: {darkMode ? "TRUE" : "FALSE" }</strong>
    </div>
  )
}

export default MovieCard