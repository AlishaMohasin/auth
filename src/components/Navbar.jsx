import  { useContext } from 'react'
import React from "react"
import { Authcontext } from '../context/Authcontext'
import Wishlist from './Wishlist'

const Navbar = () => {
    const {isauth,login,logout} =useContext(Authcontext)
  return (
    <div>Navbar

        <button onClick={()=>{
            if(isauth)  logout();
            else login("R","S")
        }}>
         
         {isauth ? "Logout" : "Login"}
        </button>
        <Wishlist/>
    </div>
  )
}

export default Navbar