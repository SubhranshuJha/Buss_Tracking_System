import React from "react";
import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

import AddBus from "./components/AddBus";
import ViewBus from "./components/ViewBus";
import EditBus from "./components/EditBus";
import DeleteBus from "./components/DeleteBus";
import AddRoute from "./components/AddRoute";
import AddTrip from "./components/AddTrip";
import Home from "./pages/Home";
import Login from "./components/Login";


function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* Dashboard Layout Route */}
        <Route path="/" element={<Home />}>

          {/* CHILD ROUTES (render in Outlet) */}
          <Route path="add-bus" element={<AddBus />} />
          <Route path="view-bus" element={<ViewBus />} />
          <Route path="edit-bus" element={<EditBus />} />
          <Route path="delete-bus" element={<DeleteBus />} />
          <Route path="add-route" element={<AddRoute />} />
          <Route path="add-trip" element={<AddTrip />} />

        </Route>

        {/* Outside layout */}
        <Route path="/login" element={<Login />} />

      </Routes>
    </>
  );
}

export default App;