import { useEffect, useState } from "react";

const ItemCount = ({ stock }) => {
    console.log("aqui hay un render del contador");
    const [count, setCount] = useState(1)

    useEffect( () => {
        console.log("se monto el componente");
        return () => {
            console.log("se desmonto el componente");
        }
    }, [])
   
    useEffect( () => {
        console.log("se modifico el estado del componente");
    }, [count])
    
    const addHandler = () => { 
        console.log("se esta sumando");
        if (count < stock) {
            setCount(count + 1)
        }
    }
    
    const resHandler = () => { 
        console.log("se esta restando");
        if (count > 1) {
            setCount(count - 1)
            
        }
    }

  return (
    <>
        <div class="border-solid border-2 border-current w-64 h-52 flex flex-col justify-evenly p-2 bg-slate-100	">
            <div >Contador</div>
            <div class="text-2xl ring-2  h-10 bg-white rounded-md p-1">
                <button onClick={resHandler} class = "hover:font-bold text-2xl text-blue-500" > - </button>
                <strong class="text-2xl m-10"> {count} </strong>
                <button onClick={addHandler} class = " hover:font-bold text-2xl text-blue-500" > + </button>
            </div>
            <button class="text-2xl rounded-md text-center text-white bg-blue-500 p-1 hover:bg-blue-800	">Agregar al carrito</button>
        </div>
    </>
  )
}

export default ItemCount