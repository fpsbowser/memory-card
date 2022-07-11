import React from "react";
import uniqid from "uniqid";

const Card = (props) => {
  const devStyle = {
    width: "150px",
    height: "175px",
    border: "1px solid green",
  };

  const handleclick = (e) => {
    props.handleclick(e);
  };

  return (
    <div>
      {props.items.map((card) => {
        return (
          <div
            key={uniqid()}
            className={"card"}
            id={card.item}
            style={devStyle}
            onClick={(e) => {
              handleclick(e);
            }}
          >
            <img
              src={card.path}
              alt={card.item}
              width={"100%"}
              height={"100%"}
            />
            <p id="item-name"></p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
