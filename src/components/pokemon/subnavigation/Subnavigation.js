import React, { useState } from "react";

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
          className={`custom-button about-section ${
            buttonToggleMenu.about.isActive
              ? `active ${color.flatColor}`
              : "null"
          }`}
        >
          {buttonToggleMenu.about.name}
        </div>
        <div
          onClick={() =>
            onNavigationClickHandle(buttonToggleMenu.baseStats.name)
          }
          className={`custom-button base-stats-section ${
            buttonToggleMenu.baseStats.isActive
              ? `active ${color.flatColor}`
              : ""
          }`}
        >
          {buttonToggleMenu.baseStats.name}
        </div>

        <div
          onClick={() => onNavigationClickHandle(buttonToggleMenu.moves.name)}
          className={`custom-button moves-section ${
            buttonToggleMenu.moves.isActive ? `active ${color.flatColor}` : ""
          }`}
        >
          {buttonToggleMenu.moves.name}
        </div>
      </div>
    </div>
  );
}
