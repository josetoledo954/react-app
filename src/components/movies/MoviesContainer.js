import React, { useEffect, useState } from 'react'
import {DarkModeContext} from "../../context/darkModeContext"
import Spinner from '../clase/Spinner'
import Footer from './Footer'
import MoviesList from './MoviesList'

const MoviesContainer = () => {


    const [darkMode, setDarkMode] = useState(false)
    const [loader, setLoader] = useState(true)

    const darkModeHandler = () => {
        setDarkMode(true)
    }

useEffect(() => {
  setTimeout(() => {
      setLoader(false)
  }, 2000);
}, [])


// if (loader){
//     return<Spinner/>
// }

  return (
      <DarkModeContext.Provider value={darkMode}>
          <h1>app de peliculas  </h1>
          <button onClick={darkModeHandler} className="border-solid border-current border-2">dark mode on</button>
         
        { loader ? <Spinner/> : <MoviesList/> }

          {/* <MoviesList/> */}
          <Footer/>
      </DarkModeContext.Provider>
  )
}

export default MoviesContainer