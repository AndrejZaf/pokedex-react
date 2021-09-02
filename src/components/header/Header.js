import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import Spinner from "../common/spinner/Spinner";
import pokeball from "../../static/images/pokeball-pokemon-svgrepo-com.svg";

export default function Header() {
  const [isLoading, setIsLoading] = useState(true);
  const [lightBulb, setLightBulb] = useState(false);
  const [cookie, setCookie] = useCookies(["theme"]);

  useEffect(() => {
    setLightBulb((state) => {
      state = cookie.theme === "true";
      return state;
    });
    setIsLoading(false);
  }, []);

  function handleOnChange(event) {
    const today = new Date();

    setLightBulb(event.target.checked);
    setCookie("theme", event.target.checked, {
      path: "/",
      expires: new Date(today.setDate(today.getDate() + 5)),
    });
  }

  if (isLoading) return <Spinner />;

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
        </ul>

        <div className="col-md-3 d-flex justify-content-end">
          <div className="form-check form-switch">
            <input
              checked={lightBulb}
              onChange={handleOnChange}
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
