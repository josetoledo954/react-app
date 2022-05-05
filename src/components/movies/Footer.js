import { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import { FavContext } from "../../context/favContext"

const Footer = () => {

const darkMode = useContext(DarkModeContext)
const {favorites} = useContext(FavContext)
const {clearFavorites} = useContext(FavContext)

const clearHandler = () => {clearFavorites()}

  return (
      <>
        <div>Footer</div>
        <strong> DarkMode: {darkMode ? "TRUE" : "FALSE" }</strong>
        <button onClick={clearHandler}>borrar favoritos</button>
        {favorites.map(f => <li> {f} </li>)}

      </>
  )
}

export default Footer