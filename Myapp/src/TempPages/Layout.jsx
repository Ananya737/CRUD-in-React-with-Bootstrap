import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <Link to="/">Home</Link>
        <Link to="insert">Insert</Link>
        <Link to="display">Display</Link>
        <Link to="search">Search</Link>
        <Link to="update">Update</Link>

        <hr size={5}/>

        <Outlet/>


        <footer>www.MyWebsite.com | All rights reserved.</footer>
        
        
        </>
    )
}
export default Layout;