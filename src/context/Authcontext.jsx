import { useState } from "react";
import { createContext } from "react";

export const Authcontext=createContext();

export const AuthProvider =({children}) =>{
    const [isauth,setIsauth] =useState (false)

    const login=(username,password)=>{
        if(username&&password){
            setIsauth(true)
        }
    }

    const logout =()=>{
        setIsauth(false)
    };
    return (
        <Authcontext.Provider value={{isauth,login,logout}}>
        {children}
        </Authcontext.Provider>
    )
}