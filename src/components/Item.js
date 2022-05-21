import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext";

const Item = ( {modelo} ) => {


const {id, stock} = modelo
const {cart} = useCartContext()

const [stockNuevo, setStockNuevo] = useState(stock)


  useEffect( () => {
    const findProductCart = cart.find((producto) => producto.id == id)
    if(findProductCart){
        const findProductCart = cart.find((producto) => producto.id == id)
        const stockN = findProductCart.stock - findProductCart.quantity
        setStockNuevo(stockN)
    }
    
    console.log("se monto el componente");
    return () => {
        console.log("se desmonto el componente");
    }
}, [])

  return (
    <div class = "border-solid border-current border-2 p-10 m-20">
        <div> {modelo.title} </div>
        <img src= {modelo.pictureUrl} alt = "imegen" ></img>
        {/* <div> {modelo.description} </div> */}
        <div> Precio {modelo.price} </div>
        <button className="text-2xl rounded-md text-center text-white bg-blue-500 p-1 hover:bg-blue-800"><Link to={`/item/${modelo.id}`}>ver detalles</Link></button>
     {
       stockNuevo == 0 ? <div className="bg-red-500 mt-10">sin stock</div> : <div className="bg-lime-500 mt-10">en stock</div>

     } 
       
    </div>
  )
}
export default Item