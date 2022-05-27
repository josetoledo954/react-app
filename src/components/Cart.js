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
      {carritoVacio ? (<div className='flex flex-col justify-center	 items-center	border-solid border-current- border-2 px-20 m-80 mt-10 h-80'>
        <div className='text-3xl '> el carrito esta vacio</div>
        <Link to={`/`} className="text-xl rounded-md text-center text-white bg-blue-500 p-5 hover:bg-blue-800	m-10">Ir a comprar</Link></div> ) : 
        (
    <div className='flex flex-col items-center justify-center border-solid border-current- border-2 px-20 m-80 mt-10 bg-white'>{cart.map(p => 
      <li key={p.id} className='flex items-center justify-between border-b-[2px] w-full '>
        <img src={p.pictureUrl} className="w-10 inline m-5" />
        <div className='text-xl w-56'> {p.title} </div>
      
        <div className='flex flex-col items-center '>
          <div className='border-[2px] w-32 mx-10 flex items-center justify-between'>
            <button className="text-2xl rounded-md text-center text-blue-800  p-1 hover:bg-blue-200	 h-10 w-10" onClick={() => restarCarrito(p.id, -1)}>-</button>
            {p.quantity}
            <button className="text-2xl rounded-md text-center text-blue-800  p-1 hover:bg-blue-200	 h-10 w-10" onClick={() => sumarCarrito(p.id, 1)}>+</button>
          </div>
          <div className='absolute mt-12 text-slate-500	'>disponibles {p.stock - p.quantity} </div>
        </div>

        <button className="text-l rounded-md text-center text-blue-500 " onClick={() => deleteItem(p.id)}>eliminar item</button>
        <div className='text-2xl w-56 text-right'>{p.price*p.quantity} </div>
      </li>)}
        <div className='border-b-[2px] w-full h-32 text-3xl text-right flex flex-col justify-center'> total {precioProductos}</div> 
      <div className='flex items-center justify-between w-full'>

        <button onClick={borrarCarrrito} className="text-l rounded-md text-center text-blue-500 	m-10">borrar carrito</button>
        <Link to={`/`} className="text-l rounded-md text-center text-blue-500 	m-10">agregar productos</Link>
        <Link to={`/compra`} className="text-xl rounded-md text-center text-white bg-blue-500 hover:bg-blue-800 p-5">comprar</Link>
              
      </div>
    </div>
        )}
    {/* <div>
      total { carritoVacio ? precioProductos : ""}
    </div> */}
        </>
  )
}

export default Cart