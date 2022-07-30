import React, { useContext } from "react";
import "./cart-item.styles.scss";
import { ReactComponent as CrossSvg } from "../../assets/svg/cross.svg";
import { CartContext } from "../../contexts/cart.context";

const CartItem = ({ cartElement }) => {
  const { id, name, image, price } = cartElement;
  const { 
    removeProductFromCart, 
    addQty,
    removeQty,
    // size,
    cart
  } = useContext(CartContext);

  const removeQtyHandler = () => removeQty(id)
  const addQtyHandler = () => addQty(id)

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
              <span onClick={() => removeProductFromCart(id)}>
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
