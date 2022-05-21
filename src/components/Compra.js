import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'




const Compra = () => {

  
  const {cart} = useCartContext()
  const {deleteCart} = useCartContext()    

const [form, setForm] = useState({})
const [compra, setCompra] = useState(false)
const [id, setId] = useState()


const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })
}

// const enviarCompra = () => {
//   saveFavs()
//   update()
// }

const saveFavs  = async(e) => { 
  e.preventDefault()
  // const user = {
  //   name: 'nombre 1',
  //   phone: '12345',
  //   email:'asdfg@asdfg.com'
  // }

  const favsToSave = {
    user: form,
    favs: cart,
    total: cart.length
  }

  // const favsWithoutImg = favorites.map(({id, title}) => ({id, title}))

  console.log(favsToSave);

  const db = getFirestore()
  const favsCollection = collection(db, 'favs')

  const response = await addDoc(favsCollection, favsToSave)
  console.log(response);
  console.log(response.id);
  setId(response.id)

  cart.forEach(e => {
    const updateFavs = async () => {
      const stockNuevo = e.stock - e.quantity    
      const idDoc = e.id
      
      const db = getFirestore()
      const cart = doc(db, 'items', idDoc )
      try {
        await updateDoc(cart, {stock: stockNuevo})
      } catch (error) {
        console.log('verificar');
      }
      const response = await updateDoc(cart, {stock: stockNuevo})
      console.log(response);
    }
    updateFavs()
    setCompra(true)
    deleteCart()
  });
}

// const update = (e) => {
// e.preventDefault()
//   cart.forEach(e => {
//     const updateFavs = async () => {
//       const stockNuevo = e.stock - e.quantity    
//       const idDoc = e.id
      
//       const db = getFirestore()
//       const cart = doc(db, 'items', idDoc )
//       try {
//         await updateDoc(cart, {stock: stockNuevo})
//       } catch (error) {
//         console.log('verificar');
//       }
//       const response = await updateDoc(cart, {stock: stockNuevo})
//       console.log(response);
//     }
//     updateFavs()
//   });
// } 

  return (
    compra ? <div className='flex flex-col items-center justify-center'>

      <svg xmlns="http://www.w3.org/2000/svg" className="h-52 w-52 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <div className='text-2xl'>su compra a sido realizada se registro con el numero {id}  </div> 
      <Link to='/ ' className="text-2xl rounded-md text-center text-white bg-blue-500 p-1 hover:bg-blue-800	m-10">bien</Link>
      </div> :
    <>
    
    <div className='flex item-center justify-center'>

        <form className='w-full max-w-xs mt-20'>
            <label className='block text-gray-700 text-sm font-bold mb-2' for='nombre'>
                nombre:
            <input 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='nombre'
            type='text' 
            name='nombre' 
            value={form.nombre}
            onChange={handleChange}
            />
            </label>
            <label className='block text-gray-700 text-sm font-bold mb-2' for='nombre'>
                mail:
            <input 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='mail'
            type='mail' 
            name='mail' 
            value={form.mail}
            onChange={handleChange}
            />
            </label>
            <label className='block text-gray-700 text-sm font-bold mb-2' for='nombre'>
                telefono:
            <input 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='telefono'
            type='text' 
            name='telefono' 
            value={form.telefono}
            onChange={handleChange}
            />
            </label>
            
            
            <button onClick={saveFavs}  className="text-2xl rounded-md text-center text-white bg-blue-500 p-1 hover:bg-blue-800 mt-10	w-full">comprar</button>
        </form>
            </div>
    </>
  )
}

export default Compra