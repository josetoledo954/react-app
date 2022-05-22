import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import ItemCount from './ItemCount'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Spinner from './Spinner'


const ItemDetailContainer = () => {
  
  const {productoId} = useParams()
  const [producto, setProductos] = useState ([])

  const [load, setLoad] = useState(true)

  useEffect(() => {
    const db = getFirestore()
    
    const itemCollection = collection(db, "items")
  getDocs(itemCollection).then((snapshot) => {
    const collection = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
   setProductos(collection.find(i => i.id === productoId))  
  setLoad(false)
  })
 
          }, [productoId])
        
          return (load ? <Spinner/> :
      (<div>
          <ItemDetail producto = {producto} />
      </div>)
  
  )
}


export default ItemDetailContainer

