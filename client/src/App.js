import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Home } from "./components";

function App() {
  return (
    <div className=" w-screen h-screen bg-blue-500 flex justify-center">
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/*" element={<Home/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App;