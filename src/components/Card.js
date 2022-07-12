import React from "react";
import uniqid from "uniqid";
import "../styles/Card.css";

const Card = (props) => {
  const handleclick = (id) => {
    props.handleclick(id);
  };

  return (
    <div className="gameboard">
      {props.items.map((card) => {
        return (
          <div
            key={uniqid()}
            className={"card"}
            id={card.item}
            onClick={() => {
              handleclick(card.item);
            }}
          >
            <img
              src={card.path}
              alt={card.item}
              width={"100%"}
              height={"100%"}
            />
            <div id="item-text">
              <p>{card.item}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
