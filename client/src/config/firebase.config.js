import {getApp, getApps, initializeApp} from "firebase/app"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDP70kG9iKgJn1sYh66VjtEbUYh1U8oIbE",
  authDomain: "project-geetapp.firebaseapp.com",
  projectId: "project-geetapp",
  storageBucket: "project-geetapp.appspot.com",
  messagingSenderId: "867825176828",
  appId: "1:867825176828:web:c6b49f5ba725744f234779",
  measurementId: "G-WDMXGN4NB8"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);

export {app, storage}