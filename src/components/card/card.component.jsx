import React from "react";
import "./card.styles.scss";

const Card = ({ product, navToProd }) => {
  const { id, name, price, image } = product;
  return (
    <div className="Card" onClick={() => navToProd(id)}>
      <div className="CardImageWrapper">
        <img src={image} alt={name} />
      </div>

      <div className="CardDescription">
        <span className="CardName">{name}</span>

        <span className="CardPrice">{price} $</span>
      </div>
    </div>
  );
};

export default Card;
