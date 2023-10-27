import { useState } from 'react';
import './App.css';
import Signup from './pages/signup';
import Login from './pages/login';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  
     
    </>
  )
}

export default App
