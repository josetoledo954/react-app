import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ( {producto} ) => {



  const [finalizar, setFinalizar] = useState(false)

     const onAdd = (count) => {
       setFinalizar(true)
    console.log(`agregaste ${count} productos al carrito `);
  }

  return (
    
    <div class = "border-solid border-current border-2 w-100">
        <div> {producto.title} </div>
        <img src= {producto.pictureUrl} alt = "imegen" ></img>
        <div> {producto.description} </div>
        <div> {producto.price} </div>
        {finalizar ? (
          <Link to={`/cart`} class="text-2xl rounded-md text-center text-white bg-blue-500 p-1 hover:bg-blue-800	">Finalizar Compra</Link>
        ) : (
          <ItemCount stock = {5} initial = {1} onAdd = {onAdd} />
        )
        }

    </div>
    
  )
}
export default ItemDetail