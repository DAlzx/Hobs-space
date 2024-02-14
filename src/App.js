import React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Views/Home";

function App() {

    const namespace = "maroon-5";

    return (
      <div className="App">
          <Routes>
              <Route path={`/${namespace}`} element={ <Home/> } />
          </Routes>
          <Link to={`/${namespace}`}>Go profil</Link>
      </div>
  );
}

export default App;
