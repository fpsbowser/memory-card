import React from "react";
import "../styles/Social.css";

const githubLight = require("../assets/GitHub-Mark-Light-120px-plus.png");

const Social = () => {
  return (
    <div className="social-container">
      <a href="https://github.com/fpsbowser">
        <div id="text">Copyright © fpsbowser</div>
      </a>
      <a href="https://github.com/fpsbowser">
        <img
          src={githubLight}
          alt={"github logo"}
          width={"32px"}
          height={"32px"}
          id={"logo"}
        />
      </a>
    </div>
  );
};

export default Social;
