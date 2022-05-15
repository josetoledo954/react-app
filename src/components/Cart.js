import React, { useContext, useEffect, useState } from 'react'
import { useCartContext } from '../context/CartContext'

const Cart = () => {

    const {cart} = useCartContext()
    const {deleteFromCart} = useCartContext()
    const {deleteCart} = useCartContext()

    const deleteItem = (id) => {deleteFromCart(id)
    }
    
    const borrarCarrrito = () => {
      setCarritoVacio(true)
      deleteCart()
    }

useEffect(() => {
  if(cart.length==0){
    setCarritoVacio(true)
  }
}, [])


  const [carritoVacio, setCarritoVacio] = useState()

  return (
    <div>{cart.map(p => 
      <li>
        id {p.id} 
        nombre {p.title} 
        cantidad {p.quantity}
        <button className='border-solid border-current border-2' onClick={() => deleteItem(p.id)}>eliminar item</button>
      </li>)}
      {carritoVacio ? (<div>el carrito esta vacio</div> ) : (<button onClick={borrarCarrrito}>borrar carrito</button>)}
        
    </div>
  )
}

export default Cart