import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartWidget } from './CartWidget'

const NavBar = () => {
  return (
    <div class = "flex items-center justify-evenly list-none	bg-slate-500	h-20">
      <h2 class="text-5xl">Tienda</h2>
      <li><Link to={`/`}>inicio</Link></li>
      <li><Link to={`/contador`}>producto</Link></li>
      <li><Link to={`/peliculas`}>preguntas</Link></li>
      <li>contacto</li>
      <CartWidget/>
    </div>
  )
}

export default NavBar