import { BrowserRouter,Routes,Route } from "react-router-dom";
import Display from "./Pages/Display";
import Insert from "./Pages/Insert";
import Home from "./Pages/Home";
import Layout from "./Layout";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>

      <Route path="/home" element={<Home/>}/>
      <Route path="/insert" element={<Insert/>}/>
      <Route path="/display" element={<Display/>}/>

      </Route>
    </Routes>

    </BrowserRouter>

    </>
  )
}
export default App;