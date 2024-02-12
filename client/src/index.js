import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateProvider } from './context/StateProvider';
import { initialState } from './context/initialState';
import reducer from './context/reducer';

// import { AnimatePresence } from "framer-motion"

import { Provider } from "react-redux";
// import { store } from './redux/store';
import myReducers from './redux';
import { createStore } from "redux"


const store = createStore(
  myReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const StateContext = createContext()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      

        <Provider store={store}>
          <App />
        </Provider>
      
    </Router>

  </React.StrictMode>
);


