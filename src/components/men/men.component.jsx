import React from "react";
import "./men.styles.scss";
import { SHOP_DATA } from "../../shop-data";
import Card from "../card/card.component";
import { useNavigate } from "react-router-dom";

const MenClothes = () => {
  let products = SHOP_DATA.filter(
    (product) => product.categoryName === "men-clothes"
  );
  let navigate = useNavigate()


  const navToProd = (id) => {
    navigate(`${id}`)
  }

  return (
    <div className="CardContainer">
      {products.map((product, index) => (
        <Card key={index} product={product} navToProd={navToProd}/>
      ))}
    </div>
  );
};

export default MenClothes;
