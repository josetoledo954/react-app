const StarshipDetail = ( {starship} ) => {
  return (
    <div class = "border-solid border-current border-2">
        <strong> {starship.name} </strong>
        <div>{starship.model}</div>
        <div>{starship.crew}</div>
    </div>
  )
}

export default StarshipDetail