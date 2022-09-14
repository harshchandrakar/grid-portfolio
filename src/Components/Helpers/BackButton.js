import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link to="/">
      <button
        style={{
          backgroundColor: "transparent",
          border: "0",
          position: "absolute",
          marginLeft: "1rem",
          marginTop: "1rem",
          color: "#fff",
        }}
      >
        <ArrowBackIcon color="white" fontSize="large" />
      </button>
    </Link>
  );
}

export default BackButton;
