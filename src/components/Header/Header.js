import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <header>
        {/* <img alt="Shelfie Logo" src="./shelfie_icon.png" /> */}
        <h1>SHELFIE</h1>
      </header>
      <nav>
        <ul>
          <Link to="/" className="Links">
            <li>Dashboard</li>
          </Link>
          <Link to="/form" className="Links">
            <li>Add Inventory</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
