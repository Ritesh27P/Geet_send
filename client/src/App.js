import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login, Home } from "./components";
import { app } from "./config/firebase.config";

import { getAuth } from "firebase/auth"

import { AnimatePresence } from "framer-motion"
import {validateUser} from "./api"


function App() {

  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();



  const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") === "true")

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((userCred) => {
      // console.log(userCred)
      if (userCred) {
        userCred.getIdToken().then((token) => {
          // console.log(token);
          validateUser(token).then((data) => {
            console.log(data)
          })
        })
      } else {
        setAuth(false);
        window.localStorage.setItem("auth", "false");
        navigate("/login");
      }
    })
  }, []);
  return (
    <AnimatePresence mode="wait">
      <div className=" h-auto min-w-[680px] bg-primary justify-center items-center">
        <Routes>
          <Route path="/login" element={<Login setAuth={setAuth} />}></Route>
          <Route path="/*" element={<Home />}></Route>
        </Routes>

      </div>
    </AnimatePresence>

  )
}

export default App;