import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useCartContext } from "../context/CartContext";


const ItemCount = ({ stock, initial, onAdd, categoryId, id }) => {
    console.log("aqui hay un render del contador");
    const [count, setCount] = useState(initial)
    const {addToCart, cart} = useCartContext()
    const {products} = useAppContext()
    const [stockNuevo, setStockNuevo] = useState(stock)


    useEffect( () => {
        const findProductCart = cart.find((producto) => producto.id == id)
        console.log(findProductCart);

        if(findProductCart){
            const findProductCart = cart.find((producto) => producto.id == id)
            const stockN = findProductCart.stock - findProductCart.quantity
            console.log("se esta sumando");
            console.log("nuevo stockckc" ,stockN);
            setStockNuevo(stockN)
            
        }
        
        console.log("se monto el componente");
        return () => {
            console.log("se desmonto el componente");
        }
    }, [])
   
    useEffect( () => {
        console.log("se modifico el estado del componente");
    }, [count])
    
    const addHandler = () => { 
        const findProductCart = cart.find((producto) => producto.id == id)
        console.log(findProductCart);

        if(findProductCart){
            const findProductCart = cart.find((producto) => producto.id == id)
            const stockN = findProductCart.stock - findProductCart.quantity
            console.log("se esta sumando");
            console.log("nuevo stockckc" ,stockN);
            setStockNuevo(stockN)
            if (count < stockN) {
                setCount(count + 1)
            }
        }else if (count < stock) {
                setCount(count + 1)
            }
        
    }
    
    const resHandler = () => { 
        console.log("se esta restando");
        if (count > 1) {
            setCount(count - 1)
            
        }
    }

    const handleClick = (id, cantidad) => {
        const findProduct = products.find((producto) => producto.id == id)

        if(!findProduct){
            alert("no esta en la base de datos")
            console.log("no completo");
            return
        }
        
        addToCart(findProduct, cantidad)
        onAdd(count, id)
        console.log("completo");
        
    }

    
  return (
      stockNuevo == 0 ? <div className="border-solid border-2 border-current w-64 h-52 flex flex-col justify-evenly p-2 bg-slate-100"><div className="bg-red-500">sin stock</div>  
      <Link to={`/category/${categoryId}`} class="text-xl rounded-md text-center text-white bg-blue-500 p-5 hover:bg-blue-800	">ver otros productos similares</Link> </div> :
    <>
        <div className="border-solid border-2 border-current w-64 h-56 flex flex-col justify-evenly p-2 bg-slate-100">
            <div>Contador</div>
            <div>disponibles {stockNuevo} </div>
            <div className="flex justify-center text-2xl ring-2 text-center  h-10 bg-white rounded-md p-1">
                <button onClick={resHandler} className = "hover:font-bold text-2xl text-blue-500 w-20" > - </button>
                <strong className = "text-2xl w-32"> {count} </strong>
                <button onClick={addHandler} className = "hover:font-bold text-2xl text-blue-500 w-20" > + </button>
            </div>
            
            <button onClick={() => handleClick(id, count)} class="text-xl rounded-md text-center text-white bg-blue-500 p-5 hover:bg-blue-800	">Agregar al carrito</button>
        </div>
    </>
  )
}

export default ItemCount