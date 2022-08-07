import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ReactComponent as CrossSvg } from "../../assets/svg/cross.svg";

import { LikedContext } from "../../contexts/liked.context";

import { addProductToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selectors";

import "./liked-item.styles.scss";

const LikedItem = ({ LikedElement }) => {
  const { id, name, image } = LikedElement;
  const { likedItems, removeProductFromLiked } = useContext(LikedContext);
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cart = useSelector(selectCartItems)

  const addToCart = () => dispatch(addProductToCart(LikedElement))

  const currentProduct = likedItems.find(el => el.id === id)

  return (
    <div className="LikedItemWrapper">
      <div className="LikedItemContainer">
        <div className="ImageContainer">
          <img src={image} alt={name} />
        </div>

        <div className="LikedItemContent">
          <div className="LikedItemContentHeader">
            <div className="NameContainer">
              <span>{name}</span>
            </div>

            <div className="DeleteItemContainer">
              <span onClick={() => removeProductFromLiked(id)}>
                <CrossSvg />
              </span>
            </div>
          </div>

          <div className="LikedItemContentFooter">
            <div className="SizeContainer">
              <span>Size: {currentProduct.size}</span>
            </div>

            <div className="FromLikedToCartContainer">
              {
                !cart.find(el => el.id === id) 
                ? (<button onClick={addToCart}>Add to cart</button>) 
                : (<button onClick={() => navigate("/cart")}>To Cart</button>)
              }

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedItem;
