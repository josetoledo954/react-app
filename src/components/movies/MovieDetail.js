import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { productosData } from "../../data/productosData"

const MovieDetail = () => {

    const {movieId} = useParams()
    const [movie, setMovie] = useState({})





    useEffect(() => {
      setMovie(productosData.find(m => m.id == movieId))
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