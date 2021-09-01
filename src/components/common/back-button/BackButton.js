import React from "react";
import { useHistory } from "react-router";
import "../common.css";

export default function BackButton() {
  let history = useHistory();
  function handleOnClick() {
    if (history.location.key === undefined) {
      history.push("/");
    } else {
      history.goBack();
    }
  }
  return (
    <div className="back-button" onClick={handleOnClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-arrow-left"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
        />
      </svg>
    </div>
  );
}
