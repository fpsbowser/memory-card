import React from "react";
import Card from "./Card";

// Control display of the game
const Gameboard = (props) => {
  const { items, handleclick, scramble } = props;

  const devStyle = { border: "1px solid red" };

  return (
    <div className="gameboard" style={devStyle}>
      <Card
        items={items}
        handleclick={handleclick}
        scramble={scramble}
        key={items[0].id}
      />
    </div>
  );
};

export default Gameboard;
