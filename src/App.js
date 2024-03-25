import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Dashboard from "./Views/DashBoard";


// Ne pas oublier d'enlever la route namespace et de la mettre à la racine pour que se soit visible sur gh-pages
// deploy gh-pages lancer la commande npm run deploy

function App() {

    const namespace = "clique";

    return (
      <div className="App">
          <Routes>
                <Route path={`/`} element={ <Home/> } />
          </Routes>
      </div>
  );
}

export default App;
