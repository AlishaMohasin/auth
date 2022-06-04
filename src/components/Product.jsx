import React from 'react'
import  { useContext } from 'react'
import { Authcontext } from '../context/Authcontext'
const Product = () => {
    const {isauth} =useContext(Authcontext)
  return (
    <div>Product:  {isauth ? "loggedin" : "loggedout"}</div>
  )
}

export default Product