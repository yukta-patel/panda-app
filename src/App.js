import React from 'react';
import './App.css';
import { Router} from "@reach/router";
import Home from "./view/Home"

import { Provider } from "react-redux";
import { store } from "./redux/store";


export default function App() {
  return (
    
     
    <Provider store={store}>
      <Router>
        <Home path="/" />
      </Router>
    </Provider>
    
  );
}