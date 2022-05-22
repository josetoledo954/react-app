import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import Check from './Check'




const Compra = () => {

  
  const {cart} = useCartContext()
  const {deleteCart} = useCartContext()    

const [form, setForm] = useState({})
const [compra, setCompra] = useState(false)
const [complet, setComplet] = useState(false)
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
    if(response){

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
        deleteCart()
        setComplet(true)
      });
    }
  setCompra(true)
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
    compra ? <Check complet = {complet} id = {id} /> :
    <>
    
    <div className='flex items-center justify-center'>

        <form className='w-full max-w-xs mt-20'>
            <label className='block text-gray-700 text-sm font-bold mb-2' for='nombre'>
                nombre:
            <input 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='nombre'
            type='text' 
            name='nombre' 
            value={form.nombre}
            required
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
            required
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
            required
            value={form.telefono}
            onChange={handleChange}
            />
            </label>
            <div className='block text-gray-700 text-sm font-bold mb-2'>detalle de la compra</div>
            <div className='shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'> {cart.map(p =><div className='border-b-[2px] m-5 text-right'> 
              {p.quantity} {p.title} {p.price*p.quantity} </div>)} </div>
            <div className='shadow appearance-none border rounded w-full  px-3 text-right mt-2 p-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'> total a pagar {cart.map(p => p.price * p.quantity).reduce((prev, curr) => prev + curr, 0)} </div>
            <button type="submit" onClick={form.nombre && form.telefono && form.mail  ? saveFavs : "" }  className="text-xl rounded-md text-center text-white bg-blue-500 p-5 hover:bg-blue-800 mt-2	w-full">comprar</button>
            <button className="text-xl rounded-md text-center text-white bg-blue-500 p-5 hover:bg-blue-800 mt-10	w-full mt-2">
              <Link to={`/carrito `}>ver carrito</Link>
              </button>
        </form>
            </div>
    </>
  )
}

export default Compra