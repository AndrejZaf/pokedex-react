import React from "react";
import { Link } from "react-router-dom";
import useSettings from "../../hooks/useSettings";
import "./PageNotFound.css";

export default function PageNotFound() {
  const { settings } = useSettings();
  return (
    <div className="justify-content-center">
      <div className="col-md-12 col-sm-12">
        <div
          className={`card ${
            settings.theme === "dark" ? "dark" : ""
          }  mt-5 mx-auto`}
        >
          <h3
            className={`card-header display-1 ${
              settings.theme === "dark" ? "" : "text-muted"
            } text-center`}
          >
            404
          </h3>

          <span
            className={`card-subtitle mb-2 ${
              settings.theme === "dark" ? "" : "text-muted"
            } text-center`}
          >
            Page Could Not Be Found
          </span>

          <div className="card-body mx-auto">
            <Link to="/" className="btn btn-warning">
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
