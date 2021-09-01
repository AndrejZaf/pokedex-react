import React from "react";

export default function PokemonAbout({
  specieData,
  heightCalculation,
  weightCalculation,
  abilities,
  genderRate,
  shape,
  happiness,
  experience,
}) {
  return (
    <div>
      <div className="pokemon-description">
        <h5>Key Characteristics</h5>
        <br />
        {specieData.habitat ? (
          <div className="row">
            <div className="col-md-2 left-text">Habitat</div>
            <div className="col-md-10 right-text">
              {specieData.habitat.name}
            </div>
          </div>
        ) : null}
        <br />
        <div className="row">
          <div className="col-md-2 left-text">Shape</div>
          <div className="col-md-10 right-text">{shape.name}</div>
        </div>

        <br />
        <div className="row">
          <div className="col-md-2 left-text">Color</div>
          <div className="col-md-10 right-text">{specieData.color.name}</div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-2 left-text">Height</div>
          <div className="col-md-10 right-text">
            {heightCalculation.meters} m - {heightCalculation.foot} ft
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-2 left-text">Weight</div>
          <div className="col-md-10 right-text">
            {weightCalculation.kilograms} kg - {weightCalculation.lbs} lbs
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-2 left-text">Abilities</div>
          <div className="col-md-10 right-text">
            {abilities.map((item) => item.ability.name).join(", ")}
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-2 left-text">Happiness</div>
          <div className="col-md-10 right-text">{happiness}</div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-2 left-text">Experience</div>
          <div className="col-md-10 right-text">{experience}</div>
        </div>
        <br />
        <h6>Breeding</h6>
        <br />
        <div className="row">
          <div className="col-md-2 left-text">Gender</div>
          <div className="col-md-10 right-text">
            {genderRate.isGenderless ? (
              "Genderless"
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gender-male"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
                  />
                </svg>
                &nbsp;&nbsp;
                {genderRate.malePercentage}% -{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gender-female"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"
                  />
                </svg>
                &nbsp;&nbsp;
                {genderRate.femalePercentage}%
              </>
            )}
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-2 left-text">Egg Groups</div>
          <div className="col-md-10 right-text">
            {specieData.egg_groups.map((group) => group.name).join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
}
