import { useEffect, useState } from "react"
import { useAppContext } from "../context/AppContext"
import Spinner from "./Spinner"
import ItemCollection from "./ItemCollection"

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
  
  

  return (load ? <div className="flex items-center justify-center"><Spinner/></div>   :
    (<div class="mx-80 mt-10">
      <div>{props.greeting}</div> 
    
      <ItemCollection/>
      
    </div>)
  )
}

export default ItemListContainer