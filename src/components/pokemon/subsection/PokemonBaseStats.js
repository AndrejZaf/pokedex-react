import React, { useEffect, useState } from "react";
import useSettings from "../../../hooks/useSettings";
import { highestStats } from "../../../static/stats";

export default function PokemonBaseStats({ stats }) {
  const [pokeStats, setPokeStats] = useState(stats);
  const { settings } = useSettings();
  useEffect(() => {
    const totalStat = stats.reduce((total, stat) => total + stat.base_stat, 0);
    setPokeStats([
      ...pokeStats,
      { base_stat: totalStat, stat: { name: "total-stats" } },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getHighestStatByName(name) {
    if (name === "total-stats") {
      return highestStats.highestTotal;
    }
    if (name === "speed") {
      return highestStats.highestSpeed;
    }
    if (name === "special-defense") {
      return highestStats.highestSpDef;
    }
    if (name === "special-attack") {
      return highestStats.highestSpAttack;
    }
    if (name === "defense") {
      return highestStats.highestDef;
    }
    if (name === "attack") {
      return highestStats.highestAttack;
    }
    if (name === "hp") {
      return highestStats.highestHp;
    }
  }

  function getClassByName(name) {
    if (name === "total-stats") {
      return "progress-bar-black";
    }
    if (name === "speed") {
      return "progress-bar-pink";
    }
    if (name === "special-defense") {
      return "progress-bar-green";
    }
    if (name === "special-attack") {
      return "progress-bar-blue";
    }
    if (name === "defense") {
      return "progress-bar-yellow";
    }
    if (name === "attack") {
      return "progress-bar-orange";
    }
    if (name === "hp") {
      return "progress-bar-red";
    }
  }

  return (
    <>
      <h6>Stats</h6>
      <br />
      {pokeStats.map((statItem, index) => {
        return (
          <div className="row" key={index}>
            <div
              className={`col-md-2 ${
                settings.theme === "dark" ? "stat-name-dark" : "state-name"
              } ${
                statItem.stat.name === "hp"
                  ? "text-uppercase"
                  : "text-capitalize"
              }`}
              key={index + 1}
            >
              {statItem.stat.name}
            </div>
            <div className="col-md-1 base-stat">{statItem.base_stat}</div>
            <div className="col-md-9" key={index + 2}>
              <div className="progress">
                <div
                  className={`progress-bar ${getClassByName(
                    statItem.stat.name
                  )}`}
                  role="progressbar"
                  aria-valuenow={statItem.base_stat}
                  style={{
                    width: `${
                      (statItem.base_stat /
                        getHighestStatByName(statItem.stat.name)) *
                      100
                    }%`,
                  }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
