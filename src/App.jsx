import { useState } from 'react'
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar />
    </BrowserRouter>
      
    </>
  )
}

export default App
