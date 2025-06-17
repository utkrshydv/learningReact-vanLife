import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

import Contact from "./Contact"

import Home from "./Home"

import "./index.css"

function App() {
 

  return (

  <BrowserRouter> 
  <Link to="/">Home</Link>
  <Link to="/contact">Contact</Link>
   <Routes>

    <Route 
    path="/" 
    element={<Home />}
    />

    <Route
    path="/contact"
    element={<Contact />}
    />

   </Routes>
  </BrowserRouter>
   
  )
}

export default App
