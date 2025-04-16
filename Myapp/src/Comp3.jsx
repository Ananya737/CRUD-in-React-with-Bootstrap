
import { myContext } from "./App";
import { useContext } from "react";
import Comp4 from "./Comp4";
const Comp3=()=>{
    const {user,setUser}=useContext(myContext)
    return(
        <>
        <h1>Component 3 - {user}</h1>
        <button onClick={()=>{setUser("Faraz!")}}>Click</button>

        <Comp4 />
        </>
    )
}
export default Comp3;