import React, { useContext } from "react";
import "./cart.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, summaryPrice } = useContext(CartContext);
  const navigate = useNavigate()
  // const cart = state.cart
  console.log(cart);
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

            <span className="SubtotalPrice">{summaryPrice} $</span>
          </div>

          <button className="CheckoutButton">Checkout</button>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
