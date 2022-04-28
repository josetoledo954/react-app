const Item = ( {modelo} ) => {
  return (
    <div class = "border-solid border-current border-2 w-52">
        <div> {modelo.title} </div>
        <img src= {modelo.pictureUrl} alt = "imegen" ></img>
        <div> {modelo.description} </div>
        <div> {modelo.price} </div>
    </div>
  )
}
export default Item