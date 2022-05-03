import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ( {producto} ) => {
     const onAdd = (count) => {
    console.log(`agregaste ${count} productos al carrito `);
  }

  return (
    
    <div class = "border-solid border-current border-2 w-100">
        <div> {producto.title} </div>
        <img src= {producto.pictureUrl} alt = "imegen" ></img>
        <div> {producto.description} </div>
        <div> {producto.price} </div>
        
        <ItemCount stock = {5} initial = {1} onAdd = {onAdd} />
    </div>
    
  )
}
export default ItemDetail