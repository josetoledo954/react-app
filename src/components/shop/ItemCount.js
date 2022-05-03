import { useState } from "react"

const ItemCount = ({onAdd}) => {

    const [count, setCount] = useState()

  return (
    <div>
        <button>+</button>
        <div> {count} </div>
        <button>-</button>
        <button onClick={onAdd}>agergar al carrito</button>
    </div>
  )
}

export default ItemCount