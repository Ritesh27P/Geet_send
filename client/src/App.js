import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login, Home } from "./components";
import { app } from "./config/firebase.config";

import {getAuth} from "firebase/auth"


function App() {

  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();

  

  const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") === "true")

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((userCred) => {
      // console.log(userCred)
      if(userCred) {
        userCred.getIdToken().then((token) => {
          console.log(token);
        })
      }else {
        setAuth(false);
        window.localStorage.setItem("auth", "false");
        navigate("/login");
      }
    })
  }, []);
  return (
    <div className=" w-screen h-screen bg-blue-500 flex justify-center">
      <Routes>
        <Route path="/login" element={<Login  setAuth={setAuth}   />}></Route>
        <Route path="/*" element={<Home/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App;