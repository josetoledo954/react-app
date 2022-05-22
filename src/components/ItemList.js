// import { useEffect, useState } from "react";
// import Item from "./Item";
// import { productosData } from "../data/productosData";
// import { useParams } from "react-router-dom";
// import { getActiveElement } from "@testing-library/user-event/dist/utils";


// const ItemList = () => {





//     const [item, setItem] = useState ([])

//     const {categoryId} = useParams()

//     useEffect(() => {
//         getItem()
//       }, [categoryId])

//     const getItem = () => {
//         const promises = new Promise( (resolve, reject) => {

//             setTimeout( () => {

//                 if (resolve) {
//                     resolve(productosData)
//                 } else {
//                     reject("promesa rejected")
//                 }
//             }, 2000)

//         })
        
//         promises
//             .then( (result) => {
//                 (categoryId !== undefined)? setItem(productosData.filter(data => data.categoryId === categoryId)) : setItem(result)
//             })
//             .catch( (err) => {
//                 console.log("la promesa fue rejected", err);
//             })

//             console.log("se completo la ejecucion del useEfect");
//     }

//     return (
//         <div class="border-solid border-current border-2 flex" >
//             {item.map ( (i) => <Item key = {i.id} modelo={i}/> )}
//         </div>
    
//     )
// }

// export default ItemList