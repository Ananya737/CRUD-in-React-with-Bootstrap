import { useState,createContext } from "react";
const myContext=createContext();

const Context=({children})=>{
    const [name,setName]=useState("Aditi");
    return(
        <>





<myContext.Provider value={{name}}>
{children}
</myContext.Provider>
        
        </>
    )
}
export default Context;
export {myContext};
