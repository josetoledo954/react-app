import { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = () => {

    const items = [
        {
            id: "1",
            title: "nombre producto",
            description: "descripcion del producto",
            price: "500",
            pictureUrl: "https://ecdisis.com/wp-content/uploads/2021/01/Que-es-una-URL.png"
        },
        {
            id: "2",
            title: "nombre producto",
            description: "descripcion del producto",
            price: "500",
            pictureUrl: "https://ecdisis.com/wp-content/uploads/2021/01/Que-es-una-URL.png"
        }
    ]

    const [item, setItem] = useState ([])

    useEffect(() => {

        const promises = new Promise( (resolve, reject) => {

            setTimeout( () => {

                if (resolve) {
                    resolve(items)
                } else {
                    reject("promesa rejected")
                }
            }, 2000)

        })
        
        promises
            .then( (result) => {
                console.log("la promesa fue saisfecha",  result);
                setItem(result)
            })
            .catch( (err) => {
                console.log("la promesa fue rejected", err);
            })

            console.log("se completo la ejecucion del useEfect");
    }, [])

    return (
        <div class="border-solid border-current border-2" >
            {item.map ( (i) => <Item key = {i.id} modelo={i}/> )}
        </div>
    
    )
}

export default ItemList