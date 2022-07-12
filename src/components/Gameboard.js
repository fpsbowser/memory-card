import React from "react";
import Card from "./Card";

const Gameboard = (props) => {
  const { items, handleclick, scramble } = props;

  return (
    <div>
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
