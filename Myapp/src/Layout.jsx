import {Outlet } from "react-router-dom";
import TopNav from "./TopNav";


const Layout=()=>{
    return(
        <>
       <TopNav/>

       <hr size="4" color="red"/>     

       <Outlet/>

       <footer>
        www.mycompany.com
       </footer>





        </>
    )
}
export default Layout;



