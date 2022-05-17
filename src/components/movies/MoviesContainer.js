import React, { useEffect, useState } from 'react'
import {DarkModeContext} from "../../context/darkModeContext"
import Spinner from '../clase/Spinner'
import FavoritesList from './FavoritesList'
import Footer from './Footer'
import MoviesList from './MoviesList'

const MoviesContainer = () => {


    
    const [darkMode, setDarkMode] = useState(false)
    const [loader, setLoader] = useState(true)

    
    const styles = {
        dark: `class1 class2 class3`,
        ligth: `calass4 class5 class6`,
        btnDark: `btn`,
        btnLigth: `btn bg-slate-200 text-black`
    }

    const darkModeHandler = () => {
        setDarkMode( previusValue => {
          return !previusValue
        } )
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
          <h1 className={ darkMode ? styles.dark : styles.ligth  }>app de peliculas  </h1>
          <button onClick={darkModeHandler} className={ darkMode ? styles.btnDark : styles.btnLigth  }>dark mode {darkMode ? `off` : `on`} </button>
         {/* <FavoritesList/> */}
        { loader ? <Spinner/> : <MoviesList/> }

          {/* <MoviesList/> */}
          <Footer/>
      </DarkModeContext.Provider>
  )
}

export default MoviesContainer