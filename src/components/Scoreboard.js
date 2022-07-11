import React from "react";

const Scoreboard = (props) => {
  const devStyle = {
    border: "1px solid goldenrod",
  };

  const { score, bestScore } = props;

  return (
    <div className="scoreboard" style={devStyle}>
      <h3>Scoreboard</h3>
      <p id="score">Score: {score}</p>
      <p id="best-score">Best Score: {bestScore}</p>
      <p id="max-score">Max Score: 30</p>
    </div>
  );
};

export default Scoreboard;
