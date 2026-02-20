import React from "react"
import Navbar from "./components/NavBar"
import { Route, Routes } from "react-router-dom"
import AddBus from "./components/AddBus"
import AddRoute from "./components/AddRoute"
import AddTrip from "./components/AddTrip"
import Home from "./pages/Home"
function App() {

  return (
    <>
      <Navbar />
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-bus" element={<AddBus />} />
      <Route path="/add-route" element={<AddRoute />} />
      <Route path="/add-trip" element={<AddTrip />} />
    </Routes>
    </>
  )
}

export default App
