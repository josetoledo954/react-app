import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore"

const Products = () => {


    const [products, setProducts] = useState([])

useEffect(() => {
  const db = getFirestore()
  const itemCollection = collection(db, `items` )
  getDocs(itemCollection).then(snapshot => {
    const productsList = []
    snapshot.docs.forEach(s => {
        console.log(s.data());
        productsList.push = ({id: s.id, ...s.data()})
        setProducts(productsList)
    })
})
}, [])


  return (
    <div>
        {products.map( p => <li> {p.title} </li>)}
    </div>
  )
}

export default Products