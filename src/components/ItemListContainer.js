import { useEffect, useState } from "react"
import { useAppContext } from "../context/AppContext"
import Spinner from "./clase/Spinner"
import Products from "./firebase-examples/Products"
import ItemCollection from "./ItemCollection"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {

  const {products} = useAppContext()
  const [load, setLoad] = useState(true)


  useEffect(() => {
    if(products.length == 0){
      setLoad(true)
    }else {
      setLoad(false)
    }
  }, [products])
  
  
  // const onAdd = (count) => {
  //   console.log(`agregaste ${count} productos al carrito `);
  // }
  return (load ? <Spinner/>  :
    (<div class="border-solid border-current border-2 bg-red">
      <div>{props.greeting}</div> 
      {/* <ItemCount stock = {5} initial = {1} onAdd = {onAdd} /> */}
      {/* <ItemList/> */}
      {/* <Products/> */}
      <ItemCollection/>
    </div>)
  )
}

export default ItemListContainer