import { useEffect, useState } from "react"
import { getFirestore, doc, getDoc, getDocs, collection } from "firebase/firestore"
import Item from "../Item"
import { useParams } from "react-router-dom"

const Products = () => {

  const {categoryId} = useParams()
  const [products, setProducts] = useState([])

// useEffect(() => {
//   const db = getFirestore()
//   const itemCollection = collection(db, `items` )
//   getDocs(itemCollection).then(snapshot => {
//     const productsList = []
//     snapshot.docs.forEach(s => {
//         console.log("dataaaaa", s.data());
//         productsList.push({id: s.id, ...s.data()})
//         setProducts(productsList)
//     })
// })
// }, [])

useEffect(() => {
  getItem()
}, [categoryId])

const getItem = () => {
  const promises = new Promise( (resolve, reject) => {
          if (resolve) {
              resolve(products)
          } else {
              reject("promesa rejected")
          }
  })
  
  promises.then( (result) => {
          (categoryId !== undefined)? setProducts(products.filter(data => data.categoryId === categoryId)) : setProducts(result)
      })
      .catch( (err) => {
          console.log("la promesa fue rejected", err);
      })

      console.log("se completo la ejecucion del useEfect");
}


useEffect(() => {
 const db = getFirestore()

 const itemCollection = collection(db, "items")
 getDocs(itemCollection).then((snapshot) => {
   if(snapshot.size == 0){
    console.log("no products");
  }
  setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
 })
}, [])


return (
  <div class="border-solid border-current border-2 flex" >
      {products.map ( (i) => <Item key = {i.id} modelo={i}/> )}
  </div>
)
}

export default Products