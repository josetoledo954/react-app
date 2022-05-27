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
    <div className = "flex flex-col border-[2px] w-80 p-2 m-2 mt-20">
        <div className="flex border-b-[2px] items-center justify-center h-80">
          <img src= {modelo.pictureUrl} alt = "imegen" className={stockNuevo == 0 ? "opacity-50 h-80" : "h-80"} ></img>
        </div>
        <div className="mt-5"> {modelo.title} </div>
        {/* <div> {modelo.description} </div> */}
        <div className="text-xl"> Precio {modelo.price} </div>
        <Link to={`/item/${modelo.id}` } className="text-xl rounded-md text-center w-full text-white bg-blue-500 p-2 hover:bg-blue-800 mt-5" >ver detalles</Link>
     {
       stockNuevo == 0 ? <div className="text-red-500 mt-5">sin stock</div> : <div className="text-lime-500 mt-5">en stock</div>

     } 
       
    </div>
  )
}
export default Item