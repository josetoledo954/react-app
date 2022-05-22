import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { useCartContext } from '../context/CartContext'

const Cart = () => {
  const [carritoVacio, setCarritoVacio] = useState()
  const [precioProductos, setPrecioProductos] = useState()
  // const [cartMod, setCartMod] = useCartMod(cart)

    const {cart} = useCartContext()
    const {deleteFromCart} = useCartContext()
    const {deleteCart} = useCartContext()

    const {addToCart} = useCartContext()
    const {products} = useAppContext()

  const deleteItem = (id) => {
    deleteFromCart(id)
  }
    
  const borrarCarrrito = () => {
    deleteCart()
  }

  const sumarCarrito = (id, cantidad) => {
      const find = cart.find((p) => p.id == id)
      if(find.quantity < find.stock){
        const findProduct = products.find((producto) => producto.id == id)
        if(!findProduct){
            return
        }
        addToCart(findProduct, cantidad)
        console.log("akfkdfjadfjadf", find.stock);
      }
    }
  
  
    const restarCarrito = (id, cantidad) => {
      const find = cart.find((p) => p.id == id)
      if(find.quantity >= 2){
        const findProduct = products.find((producto) => producto.id == id)
        if(!findProduct){
            return
        }
        addToCart(findProduct, cantidad)
      }else if(find.quantity == 1){
        deleteItem(find.id)
      }
    }
  
  
    


  

  useEffect(() => {
    if(cart.length==0){
        setCarritoVacio(true)
      }else{
        setCarritoVacio(false)
      }
      setPrecioProductos(cart.map(item => item.price * item.quantity).reduce((prev, curr) => prev + curr, 0))
  }, [cart])

  
  
  
  return (
    <>
    <div className='flex flex-col items-center justify-center'>{cart.map(p => 
      <li className='flex-1 border-b-[2px]'>
        <img src={p.pictureUrl} className="w-10 inline m-5" />
        nombre {p.title} 
        precio {p.price*p.quantity} 
        <button className="text-2xl rounded-md text-center text-white bg-blue-500 p-1 hover:bg-blue-800	m-10 h-10 w-10" onClick={() => restarCarrito(p.id, -1)}>-</button>
        cantidad {p.quantity}
        <button className="text-2xl rounded-md text-center text-white bg-blue-500 p-1 hover:bg-blue-800	m-10 h-10 w-10" onClick={() => sumarCarrito(p.id, 1)}>+</button>
        <button className="text-2xl rounded-md text-center text-white bg-blue-500 p-1 hover:bg-blue-800	m-10" onClick={() => deleteItem(p.id)}>eliminar item</button>
      </li>)}
      {carritoVacio ? (<div className='flex flex-col justify-center	 items-center	'>
        <div > el carrito esta vacio</div>
        <Link to={`/`} className="text-2xl rounded-md text-center text-white bg-blue-500 p-1 hover:bg-blue-800	m-10">Ir a comprar</Link></div> ) : 
        (<div>
        <div className='text-2xl'> total {precioProductos}</div> 
        <button onClick={borrarCarrrito} className="text-2xl rounded-md text-center text-white bg-blue-500 p-1 hover:bg-blue-800	m-10">borrar carrito</button>
        <Link to={`/`} className="text-2xl rounded-md text-center text-white bg-blue-500 p-1 hover:bg-blue-800	m-10">agregar productos</Link>
        <Link to={`/compra`} className="text-2xl rounded-md text-center text-white bg-blue-500 p-1 hover:bg-blue-800	m-10">comprar</Link>
        </div>)}
              
    </div>
    {/* <div>
      total { carritoVacio ? precioProductos : ""}
    </div> */}
        </>
  )
}

export default Cart