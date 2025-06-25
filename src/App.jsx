import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetails from "./pages/VanDetails"
import Layout from './components/Layout'
import Dashboard from "./pages/Host/Dashbord"
import Reviews from "./pages/Host/Reviews"
import Income from "./pages/Host/Income"
import HostLayout from "./components/HostLayout"

import "./index.css"

import "./server"

function App() {

 

  return (
   <BrowserRouter>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index  element = {<Home />}/>
        <Route path="about" element={<About/>}/>
        <Route path="vans" element={<Vans />}/>
        <Route path = "vans/:id" element = {<VanDetails />} />

        <Route path = "host" element = {<HostLayout />}>
          <Route index element={<Dashboard />}/>
          <Route path = "income" element = {<Income />} />
          <Route path = "reviews" element = {<Reviews />} />
        </Route>

    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
