import React, { useEffect, useState } from "react";
import { API_LIMIT, getPokemons } from "../../../services/apiService";
import PokeDexCard from "../../pokedex-card/PokeDexCard";
import { determineColor } from "../../../static/pokemonColors";
import { Link } from "react-router-dom";
import "../PokeDex.css";

export default function MiniPokeDex() {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [breakCount, setBreakCount] = useState(0);

  useEffect(() => {
    getPokemons(0, 8).then((response) => {
      setData(response.data.results);
      setIsLoading(false);
    });
    setOffset(offset + API_LIMIT);
  }, []);

  function returnIncrementedRow() {
    return breakCount + 1;
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="row">
      {data.map((item, index) => (
        <>
          {index % 4 === 0 && index !== 0 ? (
            <div className="w-100"></div>
          ) : null}
          <div className="col-lg-3 col-sm-6" key={index + 1}>
            <Link
              to={`/Pokemon/${index + 1}`}
              style={{ textDecoration: "none" }}
              key={index + 1}
            >
              <PokeDexCard
                key={index + 1}
                index={index + 1}
                name={item.name}
                image={item}
                color={determineColor(item.name)}
              />
            </Link>
          </div>
        </>
      ))}
    </div>
  );
}
