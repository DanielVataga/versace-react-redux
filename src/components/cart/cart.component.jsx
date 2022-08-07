import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems, selectCartSummary } from "../../store/cart/cart.selectors";

import "./cart.styles.scss";

const Cart = () => {
  const cart = useSelector(selectCartItems)
  const summary = useSelector(selectCartSummary)
  const navigate = useNavigate()

  return (
    <div className="CartWrapper">
      <div className="CartItemsWrapper">
        {cart.length == 0 ? (
          <div className="emtyCartWrapper">
            <span className="emptyCart">
              Find clothes that <span className="italicFont">suits</span> you
            </span>

            <button onClick={() => navigate('/')}>To the home page</button>
          </div>
        ) : (
          cart.map((el, index) => <CartItem cartElement={el} key={index} />)
        )}
      </div>

      {cart.length >= 1 ? (
        <div className="CheckoutWrapper">
          <div className="SubtotalInfo">
            <span className="SubtotalText">Subtotal:</span>

            <span className="SubtotalPrice">{summary} $</span>

          </div>

          <button className="CheckoutButton">Checkout</button>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
