import React, { useState, useCallback } from "react";
import "./HomePage.css";
import pokeball from "../../static/images/pokemon-logo.png";
import { allPokemons } from "../../static/bulk-data";
import debounce from "lodash.debounce";
import MiniPokeDex from "../pokedex/miniPokeDex/MiniPokeDex";
import mewtwo from "../../static/images/mewtwo150.png";
import heracross from "../../static/images/heracross.png";
import katrana from "../../static/images/katrana.png";
import { Link } from "react-router-dom";

export default function HomePage(props) {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [autoFillData, setAutoFillData] = useState([]);
  const [formError, setFormError] = useState(false);

  function onHandleChange(event) {
    if (formError) {
      setFormError(false);
    }
    if (event.target.value === "") {
      setAutoFillData([]);
    }
    setSearchBarValue(event.target.value);
    if (allPokemons.indexOf(event.target.value.toLowerCase()) === -1) {
      debounceSearch(event.target.value);
    }
  }

  function onHandlesubmit(event) {
    event.preventDefault();
    console.log(searchBarValue);
    if (allPokemons.indexOf(searchBarValue.toLowerCase()) === -1) {
      setFormError(true);
    } else {
      props.history.push(`/pokemon/${searchBarValue.toLowerCase()}`);
    }
  }

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const debounceSearch = useCallback(
    debounce((newValue) => {
      setAutoFillData(
        allPokemons
          .filter((name) => name.includes(newValue.toLowerCase()))
          .sort()
          .slice(0, 7)
      );
    }, 300),
    []
  );

  return (
    <>
      <div className="jumbotron custom-container d-flex align-items-end flex-column">
        <div className="align-self-center mt-auto">
          <img src={pokeball} alt={"pokemon-logo"} />
        </div>
        <div className="align-self-center mt-auto ">
          <div className="search-bar">
            <form
              onSubmit={onHandlesubmit}
              className={`has-validation ${formError ? "was-validated" : ""}`}
              noValidate
            >
              <div className="input-group position-relative mb-3">
                <input
                  className={`form-control`}
                  list="datalistOptions"
                  placeholder="Search for a Pokemon..."
                  value={searchBarValue}
                  onChange={onHandleChange}
                />
                <div
                  className={`invalid-tooltip ${formError ? "d-block" : ""}`}
                >
                  Please select a Pokemon from the list.
                </div>
                {autoFillData.length !== 0 ? (
                  <datalist
                    id="datalistOptions"
                    onClick={() => console.log("datalist clicked")}
                  >
                    {autoFillData.map((item) => {
                      return (
                        <option className="text-capitalize" key={item}>
                          {capitalize(item)}
                        </option>
                      );
                    })}
                  </datalist>
                ) : null}
                <input
                  type="submit"
                  className="btn btn-warning"
                  value="Search"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="pb-2 border-bottom text-center">
          Most Popular Pokemons
        </h2>
        <br />
        <MiniPokeDex />
        <br />
        <div className="text-center">
          <Link to="/pokedex" className={"btn btn-warning"}>
            Find more in the Pokedex
          </Link>
        </div>
      </div>

      <div className="container mt-5 px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom text-center">
          Highest Damage Dealers
        </h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon bg-purple bg-gradient">
              <img src={mewtwo} alt="mewtwo" />
            </div>
            <h2>Mewtwo</h2>
            <p>
              Mewtwo was created after years of horrific gene splicing and DNA
              engineering experiments based on Mew. It is said to have the most
              savage heart among all Pokémon, lack compassion, and strike fear
              into its enemy with cold, glowing eyes.
            </p>
            <Link
              to="/pokemon/150"
              type="button"
              className="btn btn-outline-purple"
            >
              Mewtwo Pokemon
            </Link>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-blue bg-gradient">
              <img src={heracross} alt="heracross" />
            </div>
            <h2>Heracross</h2>
            <p>
              Heracross is a bipedal, beetle-like Pokémon covered in a blue
              exoskeleton. There is a long, pronged horn on its forehead. The
              horn ends in a cross on the male and a heart-shape in the female.
              On either side of the horn is a short antenna with a spherical
              tip.
            </p>
            <Link
              to="/pokemon/214"
              type="button"
              className="btn btn-outline-blue"
            >
              Heracross Pokemon
            </Link>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-white-new bg-gradient">
              <img src={katrana} alt="katrana" />
            </div>
            <h2>Kartana</h2>
            <p>
              Kartana is a small Ultra Beast that resembles an origami human. It
              is to be folded out of a sheet of paper which is white on one side
              and orange on the other. Its head is folded slightly inside its
              body and has a four-sided star in the center.
            </p>
            <Link
              to="/pokemon/798"
              type="button"
              className="btn btn-outline-white"
            >
              Kartana Pokemon
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
