// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Display from "./Pages/Display";
// import Insert from "./Pages/Insert";
// import Home from "./Pages/Home";
// import Layout from "./Layout";
// import Search from "./Pages/Search";
// import Update from "./Pages/Update";
// import MyEdit from "./Pages/MyEdit";








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


// import Temp from "./Temp";

// const App=()=>{
//   return(
//     <>
//     <h1>Welcome!!!!</h1>
//     <Temp>
//       <h2>Hi, I am a child of Temp component!</h2>

//     </Temp>
    
//     </>
//   )
// }
// export default App;








// --------------------------------------------------------------------------------------------------------------------------------------------------------------















// import { useContext } from "react";
// import Auth from "./Auth";
// import { myContext } from "./LoginContext";
// import UnAuth from "./UnAuth";




// const App=()=>{
//     const {user}=useContext(myContext);
//     return(
//         <>
//        <h1>Login System!</h1>
//        {user.auth? <Auth/> : <UnAuth/> }
        
        
//         </>
//     )
// }
// export default App;



//-----------------------------------------------------------------------22 april: useref hook-----------------------------------------------------------------------
// used in dom manipulation.


// import { useRef } from "react";
// import { useState,useEffect } from "react";

// const App=()=>{

//   const myRef=useRef("");

  // const one=()=>{
  //   myRef.current.innerHTML="We learn react from Cybrom!";
  //   myRef.current.style.color="red";
  // }

  // const two=()=>{
  //   myRef.current.innerHTML="We learn react from Cybrom!";
  //   myRef.current.style.color="red";
  //   myRef.current.style.backgroundColor="yellow";
  //   myRef.current.style.border="1px solid red";
  //   myRef.current.style.borderRadius="50%";
  //   myRef.current.style.width="300px";
  //   myRef.current.style.height="300px";
  //   myRef.current.style.display="flex";
  //   myRef.current.style.justifyContent="center";
  //   myRef.current.style.alignItems="center";
  // }


  // const three=()=>{
  //   myRef.current.style.color="red";
  //   myRef.current.style.fontSize="30px";
  //   myRef.current.style.backgroundColor="green";

//   // }

// const [name,setName]=useState("");

// const myCnt=useRef(0);

// useEffect(()=>{
//   myCnt.current=myCnt.current+1;
// })


//   return(
//     <>
   


//     {/* <div ref={myRef}><h1>Hello Friends!</h1></div>
//     <button onClick={one}>Button 1</button>
//     <button onClick={two}>Button 2</button>
//     <button onClick={three}>Button 3</button> */}


//     enter name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />

//     <h1>count : {myCnt.current}</h1>
    




    
//     </>
//   )
// }
// export default App;



//------------------------------------------------------------------------useReducer hook------------------------------------------------------------------------------

// import { useReducer } from "react";

// const App=()=>{

//   const method=(state,action)=>{
//     let cnt=0;
//     switch(action){
//       case "Increment" : return state+1;
//       case "Decrement" : return state-1;
//       case "Reset"     : return cnt;
//       default          : return count;
      
//     }

//   }
//   const [count,dispatch]=useReducer(method,0);


//   return(
//     <>
//   <h1>Count : {count}</h1>

//   <button onClick={()=>{dispatch("Increment")}}>Increment</button>
//   <button onClick={()=>{dispatch("Decrement")}}>Decrement</button>
//   <button onClick={()=>{dispatch("Reset")}}>Reset</button>
  
//     </>
//   )
// }
// export default App;



// --------------------------------------------------------------Chatgpt question----------------------------------------------------------------------

// import { useReducer } from "react";

// const App=()=>{

// const method=(state,action)=>{
//   let initial=0;
//   switch(action){
//     case "Increment": return state+1;
//     case "Decrement": return state-1;
//     case "Reset": return initial;
//     case "Custom": return state+5;
//  }
// }
// const [count,dispatch]=useReducer(method,0);
 
// return(
//     <>

//     <h1>Count :{count}</h1>

//     <button onClick={()=>dispatch("Increment")}>Increment</button>
//     <button onClick={()=>dispatch("Decrement")}>Decrement</button>
//     <button onClick={()=>dispatch("Reset")}>Reset</button>
//     <button onClick={()=>dispatch("Custom")}>Increment By 5</button>
 
//     </>
//   )
// }
// export default App;


// -----------------------------------------------------Chatgpt question: increment by custom value-------------------------------------------------------------------













// -------------------------------------------------------------useMemo hook--------------------------------------------------------------
//Expensive functions: jo baar render honde pe chalte hain. useMemo expensive function ko chalne se rok deta hai



import { useState,useMemo} from "react";


const App=()=>
{

  const [num,setNum]=useState("");
  const [name,setName]=useState("");
  
const multi=useMemo(()=>{
  console.log(";;;;;");
  for(var i=0;i<1000000000;i++){};
  
  return  num *2;
},[num])
  



  return(
    <>
 
Enter number:<input type="number" value={num} onChange={(e)=>{setNum(e.target.value)}}/>
Enter name:<input type="text" value={name}  onChange={(e)=>{setName(e.target.value)}}/>

<h1>Multiplication: {multi}</h1>
    
    
    </>
  )
}
export default App;
















//------------------------------------------------------Context Api---------------------------------------------------------------------------
// Global state management

// const App=()=>{
//   return(
//     <>

//     <h1>Context Api!</h1>
    
    
    
//     </>
//   )
// }
// export default App;