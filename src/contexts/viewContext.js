import { createContext, useState } from "react";

export const ViewContext=createContext(null);


export default function PostContext({children}){

    const [postDetails,setPostDetails]= useState('');

    return(
        <ViewContext.Provider value={{postDetails,setPostDetails}}>
        {children}
        </ViewContext.Provider>
    )

}