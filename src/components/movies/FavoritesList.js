import { useFavContext } from "../../context/favContext"
import FavoritesListCard from "./FavoritesListCard"

const FavoritesList = () => {
  
   const {favorites, clearFavorites} = useFavContext()
  
    // const borrarFavoritos = () => {clearFavorites()}

    return (
        <>
            {/* <button onClick={borrarFavoritos}>borrar lista</button> */}
    
            <div>
                {favorites.map(p => <FavoritesListCard key={p.id} movie={p} />)}
            </div>
        </>
  )
}

export default FavoritesList