import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Display=()=>{
    const [myData,setMyData]=useState([]);
    let loadData=async()=>{
        let api="http://localhost:3000/Employees";
        let res=await axios.get(api);
        console.log(res.data);
        setMyData(res.data);
    }
    useEffect(()=>{
        loadData();
    },[]);

    let sno=0;

    let ans=myData.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.empno}</td>
                <td>{key.city}</td>
                <td>{key.salary}</td>
            </tr>

           
            </>
        )
    })

    return(
        <>
        <h1>Display Page</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th>Name</th>
          <th>Employee No.</th>
          <th>City</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody> 
        {ans}
      </tbody> 
       </Table>


    


        





        

        </>
    )
}
export default Display;