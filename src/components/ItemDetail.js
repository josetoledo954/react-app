import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ( {producto} ) => {

const {title, pictureUrl, description, price, stock, id} = producto

  const [finalizar, setFinalizar] = useState(false)




     const onAdd = (count) => {
       setFinalizar(true)
    console.log(`agregaste ${count} productos al carrito `);
  }

  return (
    
    <div class = "border-solid border-current border-2 w-100">
        <div> {title} </div>
        <img src= {pictureUrl} alt = "imegen" ></img>
        <div> {description} </div>
        <div> {price} </div>
        {finalizar ? ( <div className='flex w-100'>
          <Link to={`/carrito`} class="text-2xl rounded-md text-center text-white bg-blue-500 p-1 hover:bg-blue-800	m-5">Finalizar Compra</Link>
           <Link to={`/`} class="text-2xl rounded-md text-center text-white bg-blue-500 p-1 hover:bg-blue-800 m-5	">Seguir Comprando</Link>
           </div>)
         : (
          <ItemCount stock = {stock} initial = {1} onAdd = {onAdd} id={id} />
        )
        }

    </div>
    
  )
}
export default ItemDetail