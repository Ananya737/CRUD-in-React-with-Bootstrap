import { useContext,useState } from "react";
import { myContext } from "./LoginContext";

const UnAuth=()=>{
    const [txt,setText]=useState("");
    const {login}=useContext(myContext);
    return(
        <>
        Enter Name: <input type="text" value={txt} onChange={(e)=>{setText(e.target.value)}} />
        <button onClick={()=>{login(txt)}} >Login</button>
       
        
        </>
    )
}
export default UnAuth;