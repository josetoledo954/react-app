import React from 'react'
import { CartWidget } from './CartWidget'

const NavBar = () => {
  return (
    <div class = "flex items-center justify-evenly list-none	bg-slate-500	h-20">
      <h2 class="text-5xl">Tienda</h2>
      <li>inicio</li>
      <li>producto</li>
      <li>preguntas</li>
      <li>contacto</li>
      <CartWidget/>
    </div>
  )
}

export default NavBar