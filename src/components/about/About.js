import React from "react";
import pokeball from "../../static/images/pokeball-pokemon-svgrepo-com.svg";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={pokeball}
              className="d-block mx-lg-auto img-fluid custom-image-about"
              alt="Pokeball"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Lorem Ipsum is simply dummy text
            </h1>
            <p className="lead">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link
                to="/pokedex"
                type="button"
                className="btn btn-warning btn-lg px-4 me-md-2"
              >
                Pokedex
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row align-items-end gx-2 gx-lg-3 mb-2 mb-lg-3">
          <div className="col-3 d-none d-md-block custom-margin">
            <img
              className="img-fluid custom-image-about w-100"
              src="https://wallpapercave.com/wp/a6M4RVJ.jpg"
              alt="tst1"
            />
          </div>

          <div className="col-6 col-md-3">
            <img
              className="img-fluid custom-image-about w-100"
              src="https://wallpapercave.com/wp/Z8h0ngO.jpg"
              alt="tst2"
            />
          </div>

          <div className="col-6 col-md-3">
            <img
              className="img-fluid custom-image-about w-100"
              src="https://wallpapercave.com/wp/oE0TDpU.jpg"
              alt="tst3"
            />
          </div>

          <div className="col-3 d-none d-md-block custom-margin">
            <img
              className="img-fluid custom-image-about w-100"
              src="https://wallpapercave.com/wp/4uAmjg6.jpg"
              alt="tst4"
            />
          </div>
        </div>

        <div className="row gx-2 gx-lg-3">
          <div className="col-6 col-md-3 offset-md-3">
            <img
              className="img-fluid custom-image-about w-100"
              src="https://wallpapercave.com/wp/7oawzVn.jpg"
              alt="tst5"
            />
          </div>

          <div className="col-6 col-md-3">
            <img
              className="img-fluid custom-image-about w-100"
              src="https://wallpapercave.com/wp/omQMYOu.jpg"
              alt="tst6"
            />
          </div>
        </div>
      </div>
    </>
  );
}
