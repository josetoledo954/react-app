import { useEffect, useState } from "react";
import { moviesData } from "../../data/moviesData"
import MovieCard from "./MovieCard";

const MoviesList = () => {
    console.log(moviesData);

      const [movies, setMovies] = useState([])

  useEffect(() => {
   getMovies()
  }, [])
  

  const getMovies = () => {
    const getMoviesPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(moviesData)
      }, 2000);
    })

    getMoviesPromise
      .then( data => {
        setMovies(data)
      })
  }

    return (
    <div className="flex flex-wrap">
      {movies.map( m => <MovieCard key={m.id} movie={m} />)}
    </div>
  )
}

export default MoviesList