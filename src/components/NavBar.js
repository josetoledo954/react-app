import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { CartWidget } from './CartWidget'


const NavBar = () => {


  return (
    <div class = "flex items-center justify-between list-none	bg-slate-500	h-20 px-80">
      <h2 class="text-5xl">Tienda</h2>
      <li><Link to={`/`}>inicio</Link></li>
      <li><Link to={`/category/celulares`}>celulares</Link></li>
      <li><Link to={`/category/tablets`}>tablets</Link></li>
      <li><Link to={`/carrito`}>carrito</Link></li>
      <li>contacto</li>
      <CartWidget/>
    </div>
  )
}

export default NavBar