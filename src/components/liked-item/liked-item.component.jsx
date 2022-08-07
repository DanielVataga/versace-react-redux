import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ReactComponent as CrossSvg } from "../../assets/svg/cross.svg";

import { addProductToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selectors";

import { removeProductFromLiked } from "../../store/liked/liked.action";
import { selectLikedItems } from "../../store/liked/liked.selector";

import "./liked-item.styles.scss";

const LikedItem = ({ LikedElement }) => {
  const { id, name, image } = LikedElement;
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cart = useSelector(selectCartItems)
  const likedItems = useSelector(selectLikedItems)

  const addToCart = () => dispatch(addProductToCart(LikedElement))
  const removeFromLiked = () => dispatch(removeProductFromLiked(id))

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
              <span onClick={removeFromLiked}>
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
