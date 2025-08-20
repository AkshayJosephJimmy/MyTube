import { createContext } from "react";
import React, { useState } from 'react';


   export const SideBarContext=createContext()

 //since we want to context to have useState, we will use a provider
   export const SideBarPovider=({children})=>{

    const [isSideBar,setSideBar]= useState(false);

    const toggleSideBar=()=>{setSideBar(prev=>!prev)}

    return(
        <SideBarContext.Provider value={{isSideBar,setSideBar,toggleSideBar}}>
            {children}
        </SideBarContext.Provider>
    )
 }



