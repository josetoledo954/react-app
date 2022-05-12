import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ProductDetail = () => {


  const [item, setItem] = useState({})


  useEffect(() => {
   
    const db = getFirestore()

    const celular = doc(db, `items`, `Swxl4qUFTNfGGhXLMpSn`)
    getDoc (celular).then(res => {
      if(res.exists()){
        // console.log(res);
        // console.log(res.data());
        setItem(res.data())
      }
    })

  }, [])
  

  return (
    <>
      <div>ProductDetail</div>
      <div> {item.title} </div>
      <div> {item.price} </div>
      <div> {item.description} </div>
      <div> {item.stock} </div>
    </>
  )
}

export default ProductDetail