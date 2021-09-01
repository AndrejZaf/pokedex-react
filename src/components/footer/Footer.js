import React from "react";
import pokeball from "../../static/images/pokeball-pokemon-svgrepo-com.svg";
import pokemon from "../../static/images/pokemon-logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div>
          <img src={pokemon} className="custom-image-pokemon" alt="pokemon" />
        </div>
        <div>
          <a
            href="/"
            className="d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <img src={pokeball} className="custom-image" alt="pokeball" />
          </a>
        </div>
      </footer>
    </div>
  );
}
