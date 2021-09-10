import React, { useLayoutEffect, useState } from "react";
import "./PokeDexCard.css";

const IMAGE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
export default function PokeDexCard({ index, name, color }) {
  const [cardColor, setCardColor] = useState({});

  useLayoutEffect(() => {
    setCardColor(determinePokemonColor(color));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function determinePokemonColor() {
    if (color === "red") {
      return {
        background: "background-card-red",
        badge: "badge-background-red",
      };
    }

    if (color === "blue") {
      return {
        background: "background-card-blue",
        badge: "badge-background-blue",
      };
    }

    if (color === "purple") {
      return {
        background: "background-card-purple",
        badge: "badge-background-purple",
      };
    }

    if (color === "yellow") {
      return {
        background: "background-card-yellow",
        badge: "badge-background-yellow",
      };
    }

    if (color === "green") {
      return {
        background: "background-card-green",
        badge: "badge-background-green",
      };
    }

    if (color === "brown") {
      return {
        background: "background-card-brown",
        badge: "badge-background-brown",
      };
    }

    if (color === "white") {
      return {
        background: "background-card-white",
        badge: "badge-background-white",
      };
    }

    if (color === "black" || color === undefined) {
      return {
        background: "background-card-black",
        badge: "badge-background-black",
      };
    }

    if (color === "pink") {
      return {
        background: "background-card-pink",
        badge: "badge-background-pink",
      };
    }

    if (color === "gray") {
      return {
        background: "background-card-gray",
        badge: "badge-background-gray",
      };
    }
  }

  return (
    <div className={`custom-card ${cardColor.background}`}>
      <div className="row">
        <div className="col-12 title">{name}</div>
      </div>
      <div className="row justify-content-between">
        <div className="col-md-6">
          <ul className="badge-list">
            <li className="badge-item">
              <span className={`badge ${cardColor.badge}`}>{color}</span>{" "}
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid custom-img-size"
            src={`${IMAGE_URL}${index}.png`}
            alt={name}
          />
        </div>
      </div>
    </div>
  );
}
