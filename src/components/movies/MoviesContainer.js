import React, { useState } from 'react'
import {DarkModeContext} from "../../context/darkModeContext"
import Footer from './Footer'
import MoviesList from './MoviesList'

const MoviesContainer = () => {


    const [darkMode, setDarkMode] = useState(false)

    const darkModeHandler = () => {
        setDarkMode(true)
    }

  return (
      <DarkModeContext.Provider value={darkMode}>
          <h1>app de peliculas  </h1>
          <button onClick={darkModeHandler} className="border-solid border-current border-2">dark mode on</button>
          <MoviesList/>
          <Footer/>
      </DarkModeContext.Provider>
  )
}

export default MoviesContainer