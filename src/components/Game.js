import React from "react";
import Gameboard from "./Gameboard";
import Header from "./Header";
import Scoreboard from "./Scoreboard";

//Control game flow
const Game = () => {
  // const [score, setScore] = useState(0);
  // const [bestScore, setBestScore] = useState(0);
  // const [playerMemory, setPlayerMemory] = useState([]);

  return (
    <div className="game-container">
      <div className="header container">
        <Header />
        {/* <Scoreboard score={score} bestScore={bestScore} /> */}
        <Scoreboard />
      </div>
      <div className="gameboard-container">
        <Gameboard />
      </div>
    </div>
  );
};

export default Game;
