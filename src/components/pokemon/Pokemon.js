import React, { useEffect, useState } from "react";
import {
  getPokemonById,
  getPokemonSpeciesById,
} from "../../services/apiService";
import { determineColor } from "../../static/pokemonColors";
import BackButton from "../common/back-button/BackButton";
import "./Pokemon.css";
import Subnavigation from "./subnavigation/Subnavigation";
import PokemonAbout from "./subsection/PokemonAbout";
import PokemonBaseStats from "./subsection/PokemonBaseStats";
import PokemonMoves from "./subsection/PokemonMoves";
import Spinner from "../common/spinner/Spinner";
import useSettings from "../../hooks/useSettings";
import { decrement, increment } from "../../redux/action/index";
import { useDispatch } from "react-redux";

export default function Pokemon(props) {
  const [data, setData] = useState({});
  const [specieData, setSpecieData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [activeButton, setActiveButton] = useState("About");
  const [weightCalculation, setWeightCalculation] = useState({});
  const [heightCalculation, setHeightCalculation] = useState({});
  const [color, setColor] = useState({});
  const { settings } = useSettings();
  const dispatch = useDispatch();

  // const { settings } = useSettings();

  const [genderRate, setGenderRate] = useState({
    malePercentage: 0,
    femalePercentage: 0,
    isGenderless: false,
  });

  useEffect(() => {
    const index = props.match.params.index;
    const pokemonData = getPokemonById(index);
    const pokemonSpecies = getPokemonSpeciesById(index);
    Promise.all([pokemonData, pokemonSpecies]).then((responses) => {
      setData(responses[0].data);
      setWeightCalculation(calculateWeight(responses[0].data.weight));
      setHeightCalculation(calculateHeight(responses[0].data.height));
      setSpecieData(responses[1].data);
      setGenderRate(calculateGenderPercentage(responses[1].data.gender_rate));
      setColor(determinePokemonColor(determineColor(responses[0].data.name)));
      setIsLoading(false);
    });
  }, []);

  function setCurrentActiveButton(buttonName) {
    setActiveButton(buttonName);
  }

  function calculateWeight(weight) {
    const kilograms = (weight / 1000).toFixed(2);
    const lbs = (weight / 454).toFixed(2);
    return {
      kilograms,
      lbs,
    };
  }

  function calculateHeight(height) {
    const meters = (height / 10).toFixed(2);
    const foot = (height / 3.048).toFixed(2);
    return {
      meters,
      foot,
    };
  }

  function calculateGenderPercentage(genderRate) {
    if (genderRate === -1) {
      return { isGenderless: true };
    }

    const peakLimit = 8;
    const femalePercentage = ((genderRate / peakLimit) * 100).toFixed(1);
    const malePercentage = 100 - femalePercentage;
    return {
      malePercentage,
      femalePercentage,
    };
  }

  function determinePokemonColor(color) {
    if (color === "red") {
      return {
        background: "pokemon-background-color-red",
        badge: "pokemon-badge-background-red",
        flatColor: "flat-color-red",
      };
    }

    if (color === "blue") {
      return {
        background: "pokemon-background-color-blue",
        badge: "pokemon-badge-background-blue",
        flatColor: "flat-color-blue",
      };
    }

    if (color === "purple") {
      return {
        background: "pokemon-background-color-purple",
        badge: "pokemon-badge-background-purple",
        flatColor: "flat-color-purple",
      };
    }

    if (color === "yellow") {
      return {
        background: "pokemon-background-color-yellow",
        badge: "pokemon-badge-background-yellow",
        flatColor: "flat-color-yellow",
      };
    }

    if (color === "green") {
      return {
        background: "pokemon-background-color-green",
        badge: "pokemon-badge-background-green",
        flatColor: "flat-color-green",
      };
    }

    if (color === "gray") {
      return {
        background: "pokemon-background-color-gray",
        badge: "pokemon-badge-background-gray",
        flatColor: "flat-color-gray",
      };
    }

    if (color === "brown") {
      return {
        background: "pokemon-background-color-brown",
        badge: "pokemon-badge-background-brown",
        flatColor: "flat-color-brown",
      };
    }

    if (color === "white") {
      return {
        background: "pokemon-background-color-white",
        badge: "pokemon-badge-background-white",
        flatColor: "flat-color-white",
      };
    }

    if (color === "black") {
      return {
        background: "pokemon-background-color-black",
        badge: "pokemon-badge-background-black",
        flatColor: "flat-color-black",
      };
    }

    if (color === "pink") {
      return {
        background: "pokemon-background-color-pink",
        badge: "pokemon-badge-background-pink",
        flatColor: "flat-color-pink",
      };
    }
  }
  if (isLoading) return <Spinner />;

  function renderSection(activeButton) {
    switch (activeButton) {
      case "About":
        return (
          <PokemonAbout
            specieData={specieData}
            heightCalculation={heightCalculation}
            weightCalculation={weightCalculation}
            abilities={data.abilities}
            genderRate={genderRate}
            shape={specieData.shape}
            happiness={specieData.base_happiness}
            experience={data.base_experience}
          />
        );
      case "Base Stats":
        return <PokemonBaseStats stats={data.stats} />;
      case "Moves":
        return <PokemonMoves moves={data.moves} />;
      default:
        break;
    }
  }

  return (
    <>
      <div
        className={`top-container d-flex align-items-end flex-column ${color.background}`}
      >
        <div className="align-self-start ms-5 mt-3 back-button">
          <BackButton />
        </div>
        <div className="align-self-start ms-5 mt-3 pokemon-name">
          <h3>{data.name}</h3>
        </div>
        <div className="align-self-start ms-5 mt-3 pokemon-name">
          <h3>
            {data.types.map((typeItem, index) => {
              return (
                <div
                  className={`badge pokemon-type ${color.badge}`}
                  key={index}
                >
                  {typeItem.type.name}
                </div>
              );
            })}
          </h3>
        </div>
        <img
          className="align-self-center mt-auto pokemon-image"
          src={data.sprites.other["official-artwork"].front_default}
          alt={data.name}
        />
      </div>
      <div
        className={`${
          settings.theme === "dark"
            ? "bottom-container-dark"
            : "bottom-container"
        }`}
      >
        <Subnavigation
          color={color}
          setCurrentActiveButton={setCurrentActiveButton}
        />
        <div className="bottom-content">{renderSection(activeButton)}</div>
      </div>
    </>
  );
}
