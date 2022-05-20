import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {productosData} from "../data/productosData"
import ItemDetail from './ItemDetail'
import ItemCount from './ItemCount'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Spinner from './clase/Spinner'


const ItemDetailContainer = () => {
  
  const {productoId} = useParams()
  const [producto, setProductos] = useState ([])

  const [load, setLoad] = useState(true)
  // const onAdd = (count) => {
  //   console.log(`agregaste ${count} productos al carrito `);
  // }
  useEffect(() => {
    const db = getFirestore()
    
    const itemCollection = collection(db, "items")
  getDocs(itemCollection).then((snapshot) => {
    const collection = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
  //  setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
   setProductos(collection.find(i => i.id === productoId))  
  setLoad(false)
  })
      // const promises = new Promise( (resolve, reject) => {

      //     setTimeout( () => {

      //         if (resolve) {
      //             resolve(productosData)
      //           } else {
      //             reject("promesa rejected")
      //           }
      //         }, 2000)
              
      //       })
            
      //       promises
      //       .then( (result) => {
      //         console.log("la promesa fue saisfecha",  result);
      //         setProductos(result)
      //         setProductos(productosData.find(i => i.id == productoId))
      //       })
      //       .catch( (err) => {
      //         console.log("la promesa fue rejected", err);
      //       })
            
      //       console.log("se completo la ejecucion del useEfect");
          }, [productoId])
        
          return (load ? <Spinner/> :
      (<div>
          <ItemDetail producto = {producto} />
          {/* <ItemCount stock = {5} initial = {1} onAdd = {onAdd} /> */}
      </div>)
  
  )
}


export default ItemDetailContainer

