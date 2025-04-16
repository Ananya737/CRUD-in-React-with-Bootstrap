import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import context from 'react-bootstrap/esm/AccordionContext.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
// import Context from './Context.jsx'




createRoot(document.getElementById('root')).render(
// {/* <Context> */}
<App />
// {/* </Context> */}
    
)
