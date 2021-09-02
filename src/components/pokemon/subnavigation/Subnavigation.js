import React, { useState } from "react";
import useSettings from "../../../hooks/useSettings";

const defaultState = {
  about: { name: "About", isActive: false },
  baseStats: { name: "Base Stats", isActive: false },
  moves: { name: "Moves", isActive: false },
};

export default function Subnavigation({ color, setCurrentActiveButton }) {
  const [buttonToggleMenu, setButtonToggleMenu] = useState({
    about: { name: "About", isActive: true },
    baseStats: { name: "Base Stats", isActive: false },
    moves: { name: "Moves", isActive: false },
  });
  const { settings } = useSettings();

  function onNavigationClickHandle(buttonName) {
    if (buttonName === buttonToggleMenu.about.name) {
      setCurrentActiveButton(buttonToggleMenu.about.name);
      setButtonToggleMenu({
        ...defaultState,
        about: { name: defaultState.about.name, isActive: true },
      });
    }

    if (buttonName === buttonToggleMenu.baseStats.name) {
      setCurrentActiveButton(buttonToggleMenu.baseStats.name);
      setButtonToggleMenu({
        ...defaultState,
        baseStats: { name: defaultState.baseStats.name, isActive: true },
      });
    }

    if (buttonName === buttonToggleMenu.moves.name) {
      setCurrentActiveButton(buttonToggleMenu.moves.name);
      setButtonToggleMenu({
        ...defaultState,
        moves: { name: defaultState.moves.name, isActive: true },
      });
    }
  }

  return (
    <div className="container-header">
      <div className="d-flex justify-content-evenly">
        <div
          onClick={() => onNavigationClickHandle(buttonToggleMenu.about.name)}
          className={`${
            settings.theme === "dark" ? "custom-button-dark" : "custom-button"
          } about-section ${
            buttonToggleMenu.about.isActive
              ? `${settings.theme === "dark" ? "active-dark" : "active"} ${
                  color.flatColor
                }`
              : "null"
          }`}
        >
          {buttonToggleMenu.about.name}
        </div>
        <div
          onClick={() =>
            onNavigationClickHandle(buttonToggleMenu.baseStats.name)
          }
          className={`${
            settings.theme === "dark" ? "custom-button-dark" : "custom-button"
          } about-section ${
            buttonToggleMenu.baseStats.isActive
              ? `${settings.theme === "dark" ? "active-dark" : "active"} ${
                  color.flatColor
                }`
              : "null"
          }`}
        >
          {buttonToggleMenu.baseStats.name}
        </div>

        <div
          onClick={() => onNavigationClickHandle(buttonToggleMenu.moves.name)}
          className={`${
            settings.theme === "dark" ? "custom-button-dark" : "custom-button"
          } about-section ${
            buttonToggleMenu.moves.isActive
              ? `${settings.theme === "dark" ? "active-dark" : "active"} ${
                  color.flatColor
                }`
              : "null"
          }`}
        >
          {buttonToggleMenu.moves.name}
        </div>
      </div>
    </div>
  );
}
