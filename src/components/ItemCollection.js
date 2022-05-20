import { useEffect, useState } from "react"
import { getFirestore, doc, getDoc, getDocs, collection } from "firebase/firestore"
import Item from "./Item"
import { useParams } from "react-router-dom"

const ItemCollection = () => {

    const {categoryId} = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    getItem()
  }, [categoryId])
  
  const getItem = () => {
    
      const db = getFirestore()
      
      const itemCollection = collection(db, "items")
    getDocs(itemCollection).then((snapshot) => {
      const collection = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      categoryId !== undefined ? setProducts(collection.filter(p => p.categoryId === categoryId)) : 
      setProducts(collection)
    })
    
  }

  return (
    <div class="border-solid border-current border-2 flex" >
      {products.map ( (i) => <Item key = {i.id} modelo={i}/> )}
  </div>
  )
}

export default ItemCollection

// import React from 'react'

// const ItemCollection = () => {
//   return (
//     <div>ItemCollection</div>
//   )
// }

// export default ItemCollection