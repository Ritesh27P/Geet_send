import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login, Home } from "./components";
import { app } from "./config/firebase.config";

import { getAuth } from "firebase/auth"

import { AnimatePresence } from "framer-motion"
import {validateUser} from "./api"
import { useDispatch } from "react-redux";
import { addUser } from "./redux/createUserSlice";
// import { useStateValue } from "./context/StateProvider";import { actionType } from "./context/reducer";

function App() {

  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();

  // const [{user}, dispatch] = useStateValue();


  const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") === "true")
  const dispatch = useDispatch()
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((userCred) => {
      // console.log(userCred)
      if (userCred) {
        userCred.getIdToken().then((token) => {
          // console.log(token);
          validateUser(token).then((data) => {
            console.log("Data fetched")
            // dispatch({
            //   type: actionType.SET_USER,
            //   user : data
            // })
            dispatch(addUser(data))

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
    <AnimatePresence >
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