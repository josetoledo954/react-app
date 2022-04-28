import { Link } from "react-router-dom"

const MovieCard = ( props ) => {

    const {id, title, director, year, duration} = props.movie

  return (
    <div className="border-solid border-current border-2 h-80 w-52 m-10">
        <div> {title} </div>
        <div> {director} </div>
        <div> {year} </div>
        <div> {duration} </div>

        <Link className="border-solid border-current border-2" to={`/pelicula/${id}`}>Descripcion</Link>
    </div>
  )
}

export default MovieCard