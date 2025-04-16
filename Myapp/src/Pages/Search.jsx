import { useState } from "react";
import axios from "axios";

const Search=()=>{
    const [name,setName]=useState("");
    const [myData,setMyData]=useState([]);
    const searchData=async()=>{
        let api=`http://localhost:3000/Employees/?name=${name}&${empno}`;
        let res=await axios.get(api);
        console.log(res.data);
        setMyData(res.data);
        
    }

    const ans=myData.map((key)=>{
        return(
            <>
            <h1>Welcome {key.name}!</h1>
            <h2>Employee no. : {key.empno}</h2>
            <h2>City: {key.city}</h2>
            <h2>Salary : {key.salary}</h2>
            
            </>
        )
    })
    return(
        <>
        <h1>Search Page!</h1>

        <input type="text" placeholder="Search by name" value={name}  onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={searchData}>Search</button>

        <div>
            {ans}
        </div>
    </>
    )
}
export default Search;