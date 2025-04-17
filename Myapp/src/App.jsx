// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Display from "./Pages/Display";
// import Insert from "./Pages/Insert";
// import Home from "./Pages/Home";
// import Layout from "./Layout";
// import Search from "./Pages/Search";
// import Update from "./Pages/Update";
// import MyEdit from "./Pages/MyEdit";




// // import One from "./ONe";

// const App=()=>{
//   return(
//     <>
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout/>}>
//       <Route index element={<Home/>}/>
//       <Route path="/home" element={<Home/>}/>
//       <Route path="/insert" element={<Insert/>}/>
//       <Route path="/display" element={<Display/>}/>
//       <Route path="/search" element={<Search/>}/>
//       <Route path="/update" element={<Update/>}/>
//       <Route path="/myedit/:id" element={<MyEdit/>}/>
      
      

//       </Route>
//     </Routes>
//   </BrowserRouter>

//     </>
//   )
// }
// export default App;


































// // import { useState,createContext } from "react";
// // import Comp1 from "./Comp1";

// // const myContext = createContext();


// // const App=()=>{
  
// //   const [user,setUser]=useState("Ananya");
// //   return(
// //     <>
// //     <h1>Welcome {user} </h1>
// //     <button onClick={()=>{setUser("Viplove!")}}>Click</button>

// //     <myContext.Provider value={{user,setUser}}>
// //     <Comp1  />
// //     </myContext.Provider>
    

// //     </>
// //   )
// // }
// // export default App;
// // export {myContext};

// // import Comp from "./Comp";
// // const myContext=createContext();

// // const App=()=>{
// //   const [name,setName]=useState("Ananya");
// //   return(
// //     <>
// //     <h1>Welcome!</h1>
// //     <myContext.Provider value={{name}}>
// //      <Comp/>
// //     </myContext.Provider>
    
// //     </>
// //   )
// // }
// // export default App;
// // export {myContext};


// // import Cybrom from "./Cybrom";

// // const App=()=>{
// //   return(
// //     <>

// //     <Cybrom/>

    
    
// //     </>
// //   )
// // }
// // export default App;


import Temp from "./Temp";

const App=()=>{
  return(
    <>
    <h1>Welcome!!!!</h1>
    <Temp>
      <h2>Hi, I am a child of Temp component!</h2>

    </Temp>
    
    </>
  )
}
export default App;