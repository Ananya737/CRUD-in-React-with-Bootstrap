import {Link,Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout=()=>{
    return(
        <>

<Navbar bg="primary" data-bs-theme="dark">
<Container>
<Navbar.Brand as={Link}>Navbar</Navbar.Brand>
<Nav className="me-auto">
<Nav.Link as={Link}  to="/home">Home</Nav.Link>
<Nav.Link as={Link} to="/insert">Insert</Nav.Link>
<Nav.Link as={Link} to="/display">Display</Nav.Link>
  </Nav>
</Container>
</Navbar>
    <hr size="4" color="red"/>     

      <Outlet/>

      <footer>
        www.mycompany.com
      </footer>





        </>
    )
}
export default Layout;



