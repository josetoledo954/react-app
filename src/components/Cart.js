import React, { useContext } from 'react'
import { useCartContext } from '../context/CartContext'

const Cart = () => {

    const {cart} = useCartContext()
    const {deleteFromCart} = useCartContext()
    const {deleteCart} = useCartContext()

    const deleteItem = () => {deleteFromCart()}
    const borrarCarrrito = () => {deleteCart()}
  return (
    <div>{cart.map(f => <li>
        {f.id} {f.title} 
        <button onClick={deleteItem}>eliminar</button>
        </li>)}
        <button onClick={borrarCarrrito}>borrar carrito</button>
    </div>
  )
}

export default Cart