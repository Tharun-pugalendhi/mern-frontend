import React,{useState} from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import '../styles/Signup.css';
import {Link,useNavigate} from "react-router-dom"

const Signup = () => {
    const [formData,setfromData]=useState({
        name:"",
        email:"",
        password:""
    })

    const handlechange = (e) => {
        const{name,value}=e.target
        setfromData({...formData,
            [name]:value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
    }
  return (
    <Container>
        <h1>Registration Form</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' name='name' value={formData.name} onChange={handlechange} required />
            </Form.Group>
        
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' value={formData.email} onChange={handlechange} required />
            </Form.Group>
        
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' name='password' value={formData.password} onChange={handlechange} required />
            </Form.Group>
            <Button variant='primary' type='submit'>Register</Button>
            <p>Already have an account?<Link to="/login">Login</Link></p>
        </Form>

    </Container>
  )
}

export default Signup
