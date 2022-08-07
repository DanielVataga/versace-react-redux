import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as CrossSvg } from "../../assets/svg/cross.svg";

import { selectCartItems } from "../../store/cart/cart.selectors";
import { removeProductFromCart, addQty, removeQty } from "../../store/cart/cart.action";

import "./cart-item.styles.scss";

const CartItem = ({ cartElement }) => {
  const dispatch = useDispatch()

  const { id, name, image, price } = cartElement;
  const cart = useSelector(selectCartItems)

  const removeQtyHandler = () => dispatch(removeQty(cart, id))
  const addQtyHandler = () => dispatch(addQty(cart, id))

  const currentProduct = cart.find(el => el.id === id)



  return (
    <div className="CartItemWrapper">
      <div className="CartItemContainer">
        <div className="ImageContainer">
          <img src={image} alt={name} />
        </div>

        <div className="CartItemContent">
          <div className="CartItemContentHeader">
            <div className="NameContainer">
              <span>{name}</span>
            </div>

            <div className="DeleteItemContainer">
              <span onClick={() => dispatch(removeProductFromCart(id))}>
                <CrossSvg />
              </span>
            </div>
          </div>

          <div className="CartItemContentFooter">
            <div className="SizeContainer">
              <span>Size: {currentProduct.size}</span>

              <div className="QuantityContainer">
                <span>Qty: {currentProduct.quantity}</span>
                <div className="ChangeQtycontainer">
                  <button className="decrement" onClick={removeQtyHandler}>&#60;</button>
                  <div className="number">{currentProduct.quantity}</div>
                  <button className="increment" onClick={addQtyHandler}>&#62;</button>
                </div>

              </div>
            </div>

            <div className="PriceContainer">
              <span>{price} $</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
