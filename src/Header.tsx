import React from "react";
import github_logo from "../src/github_logo.svg"

const Header = () => {
  let date = new Date();
  let formattedDate = date.toDateString().split(" ");
  return (
    <header>
      <div style={{ backgroundColor: "orange", padding: "0.5rem", display:"flex" }}>
        {" "}
        <a href="https://github.com/UhOhSpiders/xylo-guesser">
          <img src={github_logo} style={{ width: "30px", paddingLeft:"1rem" }} />
        </a>
      </div>
      <div
        style={{
          display: "flex",
          padding: "0.5rem",
          paddingLeft: "4rem",
          paddingTop: "0.8rem",
        }}
      >
        <h1>Xylo Guesser</h1>
        <h2>
          {formattedDate[1]} {formattedDate[2]}, {formattedDate[3]}
        </h2>
      </div>
      <hr></hr>
    </header>
  );
};

export default Header;
