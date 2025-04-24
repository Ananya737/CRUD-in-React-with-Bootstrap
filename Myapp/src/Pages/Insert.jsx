import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const Insert=()=>{

    const[input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
       setInput(values=>({...values,[name]:value}));
       console.log(input);
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api="http://localhost:3000/Employees";
        let res=await axios.post(api,input);
        setInput({
          name:"",
          empno:"",
          city:"",
          salary:""
        })
        
        toast.success("Saved!");
       
     
    }

    return(
        <>
        <h1>Insert Page!</h1>
      <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" onChange={handleInput} name='name' value={input.name}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Employee No.</Form.Label>
        <Form.Control type="text" onChange={handleInput} name='empno' value={input.empno} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" onChange={handleInput} name='city'  value={input.city}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Salary</Form.Label>
        <Form.Control type="text" onChange={handleInput} name='salary' value={input.salary}/>
      </Form.Group>
      
      <Button type="submit" onClick={handleSubmit} >
        Submit
      </Button>
    </Form>
    </div>

    <ToastContainer />
        </>
    )
}
export default Insert;