import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ( {producto} ) => {

const {title, pictureUrl, description, price, stock,categoryId, id} = producto

  const [finalizar, setFinalizar] = useState(false)




     const onAdd = (count) => {
       setFinalizar(true)
    console.log(`agregaste ${count} productos al carrito `);
  }
const desc = description.split('. ')
  return (
    
    <div class = "border-solid border-current border-2 items-start justify-evenly flex mx-56">
        <img src= {pictureUrl} alt = "imegen" ></img>
        <div className='flex flex-col mt-5	'> 
          <div className='text-2xl mb-5'>{title}</div>  
          <div className='text-5xl mb-10'> {price} </div>
          <div > {desc.map(p => <li> {p} </li> )}</div>
        </div>
        {finalizar ? ( <div className='flex flex-col w-100 mt-56'>
          <Link to={`/carrito`} class="text-xl rounded-md text-center text-white bg-blue-500 p-5 hover:bg-blue-800 m-5">Finalizar Compra</Link>
           <Link to={`/`} class="text-xl rounded-md text-center text-white bg-blue-500 p-5 hover:bg-blue-800 m-5	">Seguir Comprando</Link>
           </div>)
         : (
           <div className='mt-56'>
          <ItemCount stock = {stock} initial = {1} onAdd = {onAdd} categoryId = {categoryId} id={id} />
             </div>
        )
        }

    </div>
    
  )
}
export default ItemDetail