import React from 'react'
import { Link } from 'react-router-dom'

const Check = ({complet, id}) => {
  return (
    complet ? <div className='flex flex-col items-center justify-center'>

      <svg xmlns="http://www.w3.org/2000/svg" className="h-52 w-52 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <div className='text-2xl'>su compra a sido realizada se registro con el numero {id}  </div> 
      <Link to='/ ' className="text-2xl rounded-md text-center text-white bg-blue-500 p-1 hover:bg-blue-800	m-10">bien</Link>
      </div> : <div className='flex flex-col items-center justify-center'>


      <svg xmlns="http://www.w3.org/2000/svg" className="h-52 w-52 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <div className='text-2xl'>no se completo la compra</div> 
      <Link to='/carrito ' className="text-2xl rounded-md text-center text-white bg-blue-500 p-1 hover:bg-blue-800	m-10">ir al carrito</Link>
      </div>
  )
}

export default Check