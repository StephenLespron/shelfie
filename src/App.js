import React from "react";
import { HashRouter } from "react-router-dom";
import Router from "./Router";
import Header from "./components/Header/Header";
import "./App.css";
import "./reset.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        {Router}
      </div>
    </HashRouter>
  );
}
export default App;
