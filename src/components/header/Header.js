import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import Spinner from "../common/spinner/Spinner";
import pokeball from "../../static/images/pokeball-pokemon-svgrepo-com.svg";
import useSettings from "../../hooks/useSettings";

export default function Header() {
  const [isLoading, setIsLoading] = useState(true);
  const [lightBulb, setLightBulb] = useState(false);
  const [cookie, setCookie] = useCookies(["theme"]);
  const { settings, saveSettings } = useSettings();

  useEffect(() => {
    setLightBulb((state) => {
      saveSettings({ theme: determineThemeColor(cookie.theme) });
      changeTheme(determineThemeColor(cookie.theme));
      return cookie.theme === "true";
    });
    setIsLoading(false);
  }, []);

  function determineThemeColor(theme) {
    return theme === "true" ? "dark" : "light";
  }

  function changeTheme(name) {
    if (name === "dark") {
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
    }
    if (name === "light") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  function updateClasses() {
    if (settings.theme === "dark") {
      return "light";
    }
    if (settings.theme === "light") {
      return "dark";
    }
  }

  function handleOnChange(event) {
    const today = new Date();
    setLightBulb(event.target.checked);
    updateClasses();
    changeTheme(determineThemeColor(`${event.target.checked}`));
    saveSettings({ theme: determineThemeColor(`${event.target.checked}`) });
    setCookie("theme", event.target.checked, {
      path: "/",
      expires: new Date(today.setDate(today.getDate() + 5)),
    });
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="container">
      <header
        className={`d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 text-white border-bottom`}
      >
        <NavLink
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img src={pokeball} className="custom-image" alt="pokeball" />
        </NavLink>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink
              to="/"
              className={`nav-link px-2 link-${lightBulb ? "light" : "dark"}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pokedex"
              className={`nav-link px-2 link-${lightBulb ? "light" : "dark"}`}
            >
              Pokedex
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={`nav-link px-2 link-${lightBulb ? "light" : "dark"}`}
            >
              About
            </NavLink>
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
