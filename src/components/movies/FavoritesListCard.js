const FavoritesListCard = ({movie}) => {
    
  return (
    <div>
        <li> {movie.id} </li>
        <li> {movie.title} </li>
    </div>
  )
}

export default FavoritesListCard