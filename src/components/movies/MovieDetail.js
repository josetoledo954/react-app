import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { moviesData } from "../../data/moviesData"

const MovieDetail = () => {

    const {movieId} = useParams()
    const [movie, setMovie] = useState({})





    useEffect(() => {
      setMovie(moviesData.find(m => m.id == movieId))
    }, [movieId])
    

  return (
      <>
        <div>MovieDetail: {movieId} </div>
        <li> {movie.id} </li>
        <li> {movie.title} </li>
        <Link to={`/pelicula/3`}>pelicula 3</Link>
      </>
  )
}

export default MovieDetail