import React from "react";
import "../styles/Scoreboard.css";

const Scoreboard = (props) => {
  const { score, bestScore } = props;

  return (
    <div className="scoreboard-container">
      <h3 id={"scoreboard"}>Scoreboard</h3>
      <p id="score">Score: {score}</p>
      <p id="best-score">Best Score: {bestScore}</p>
      <p id="max-score">Max Score: 30</p>
    </div>
  );
};

export default Scoreboard;
