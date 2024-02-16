import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";

function App() {

    const namespace = "maroon-5";

    return (
      <div className="App">
          <Routes>
              <Route path={`/`} element={ <Home/> } />
          </Routes>
      </div>
  );
}

export default App;
