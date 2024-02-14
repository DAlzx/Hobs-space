import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";

function App() {

    const namespace = "maroon-5";

    return (
      <div className="App">
          <Routes>
              <Route path={`/${namespace}`} element={ <Home/> } />
          </Routes>
          <a href="maroon-5">Go profil</a>
      </div>
  );
}

export default App;
