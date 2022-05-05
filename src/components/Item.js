import { Link } from "react-router-dom"

const Item = ( {modelo} ) => {
  return (
    <div class = "border-solid border-current border-2 w-87 p-10 m-20">
        <div> {modelo.title} </div>
        <img src= {modelo.pictureUrl} alt = "imegen" ></img>
        {/* <div> {modelo.description} </div> */}
        <div> Precio {modelo.price} </div>
        <button className="text-2xl rounded-md text-center text-white bg-blue-500 p-1 hover:bg-blue-800"><Link to={`/item/${modelo.id}`}>ver detalles</Link></button>
       
    </div>
  )
}
export default Item