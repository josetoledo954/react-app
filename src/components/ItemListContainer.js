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
  return (load ? <div className="flex items-center h-full justify-center bg-red-500"><Spinner/></div>   :
    (<div class="border-solid border-current border-2 ">
      <div>{props.greeting}</div> 
      {/* <ItemCount stock = {5} initial = {1} onAdd = {onAdd} /> */}
      {/* <ItemList/> */}
      {/* <Products/> */}
      <ItemCollection/>
    </div>)
  )
}

export default ItemListContainer