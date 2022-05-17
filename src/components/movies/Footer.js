import { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import { FavContext } from "../../context/favContext"
import FavoritesList from "./FavoritesList"

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
        <FavoritesList/>

      </>
  )
}

export default Footer