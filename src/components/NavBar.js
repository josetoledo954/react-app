import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { CartWidget } from './CartWidget'
import { productosData } from '../data/productosData'


const NavBar = () => {

  // const {categoryId} = useParams()
  //   const [category, setCategory] = useState({})



  //   useEffect(() => {
  //     setCategory(productosData.find(c => c.categoryId == categoryId))
  //   }, [categoryId])

  return (
    <div class = "flex items-center justify-evenly list-none	bg-slate-500	h-20">
      <h2 class="text-5xl">Tienda</h2>
      <li><Link to={`/`}>inicio</Link></li>
      <li><Link to={`/category/category1`}>categoria 1</Link></li>
      <li><Link to={`/category/category2`}>categoria 2</Link></li>
      <li><Link to={`/peliculas`}>peliculas</Link></li>
      <li>contacto</li>
      <CartWidget/>
    </div>
  )
}

export default NavBar