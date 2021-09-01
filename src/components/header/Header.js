import React from "react";
import pokeball from "../../static/images/pokeball-pokemon-svgrepo-com.svg";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img src={pokeball} className="custom-image" alt="pokeball" />
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 link-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/pokedex" className="nav-link px-2 link-dark">
              Pokedex
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link px-2 link-dark">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link px-2 link-dark">Contact</Link>
          </li>
        </ul>

        <div className="col-md-3 text-end"></div>
      </header>
    </div>
  );
}