import { useContext } from "react";
import { myContext } from "./Context";



const Cybrom=()=>{
    
const {name}=useContext(myContext)
    return(
      <>
  <h1>Welcome {name}</h1>

  
      
      
      </>
    )
  }
  export default Cybrom;