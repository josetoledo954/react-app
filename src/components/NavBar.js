import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { CartWidget } from './CartWidget'
import { productos } from '../data/productosData'


const NavBar = () => {


  return (
    <div class = "flex items-center justify-evenly list-none	bg-slate-500	h-20">
      <h2 class="text-5xl">Tienda</h2>
      <li><Link to={`/`}>inicio</Link></li>
      <li><Link to={`/category/celulares`}>celulares</Link></li>
      <li><Link to={`/category/tablets`}>tablets</Link></li>
      <li><Link to={`/peliculas`}>peliculas</Link></li>
      <li><Link to={`/carrito`}>carrito</Link></li>
      <li><Link to={`/favoritos`}>favoritos</Link></li>
      <li>contacto</li>
      <CartWidget/>
    </div>
  )
}

export default NavBar