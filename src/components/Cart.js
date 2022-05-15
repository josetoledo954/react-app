import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { useCartContext } from '../context/CartContext'

const Cart = () => {
  const [carritoVacio, setCarritoVacio] = useState()

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
    const findStock = cart.map(p => {
      if(p.quantity < p.stock){
        const findProduct = products.find((producto) => producto.id == id)
        if(!findProduct){
            return
        }
        addToCart(findProduct, cantidad)
      }
    })
    }
  
  
    const restarCarrito = (id, cantidad) => {
    const findStock = cart.map(p => {
      if(p.quantity >= 2){
        const findProduct = products.find((producto) => producto.id == id)
        if(!findProduct){
            return
        }
        addToCart(findProduct, cantidad)
      }else if(p.quantity == 1){
        deleteItem(p.id)
      }
    })
    }
  
  
    


  

  useEffect(() => {
    if(cart.length==0){
        setCarritoVacio(true)
      }else{
        setCarritoVacio(false)
      }
  }, [cart])
  

  return (
    <div>{cart.map(p => 
      <li>
        id {p.id} 
        nombre {p.title} 
        <button className='border-solid border-current border-2 m-5 p-2' onClick={() => restarCarrito(p.id, -1)}>-</button>
        cantidad {p.quantity}
        <button className='border-solid border-current border-2 m-5 p-2' onClick={() => sumarCarrito(p.id, 1)}>+</button>
        <button className='border-solid border-current border-2' onClick={() => deleteItem(p.id)}>eliminar item</button>
      </li>)}
      {carritoVacio ? (<div className='flex flex-col justify-center	 items-center	'>
        <div> el carrito esta vacio</div>
        <Link to={`/`} className="text-2xl rounded-md text-center text-white bg-blue-500 p-1 hover:bg-blue-800	m-10">Ir a comprar</Link></div> ) : (<button onClick={borrarCarrrito}>borrar carrito</button>)}
        
    </div>
  )
}

export default Cart