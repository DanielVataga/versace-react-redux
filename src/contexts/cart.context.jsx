import { createContext, useReducer } from "react";

export const CartContext = createContext();

const TYPES = {
  SET_TO_CART: "SET_TO_CART",
  SET_SIZE: "SET_SIZE",
  SET_REMOVE_ITEM: "SET_REMOVE_ITEM",
  SET_ADD_QTY: "SET_ADD_QTY",
  SET_DECREASE_QTY: "SET_DECREASE_QTY",
};

const initialState = {
  cart: [],
  size: 37,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  const { cart, size } = state;

  switch (type) {
    case TYPES.SET_TO_CART:
      return { ...state, cart: [...cart, {...payload, size: size}] };
    case TYPES.SET_SIZE:
      return { ...state, size: +payload };
    case TYPES.SET_REMOVE_ITEM:
      return { ...state, cart: cart.filter((item) => item.id !== payload) };
    case TYPES.SET_ADD_QTY:
      return { ...state };
    case TYPES.SET_DECREASE_QTY:
      return { ...state };
    default:
      throw new Error(`Unhandled type ${type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cart, size }, dispatch] = useReducer(reducer, initialState);

  const addProductToCart = (product) =>
    dispatch({ type: TYPES.SET_TO_CART, payload: product });

  const getSize = (size) => dispatch({ type: TYPES.SET_SIZE, payload: size });

  const removeProductFromCart = (id) => {
    dispatch({ type: TYPES.SET_REMOVE_ITEM, payload: id });
  };

  const addQty = (id) => {
    cart.find((el) => el.id === id).quantity++;
    dispatch({ type: TYPES.SET_ADD_QTY });
  };

  const removeQty = (id) => {
    const prod = cart.find((el) => el.id === id);
    prod.quantity--;
    if (prod.quantity === 0) {
      cart.filter((item) => item.id !== id);
      dispatch({ type: TYPES.SET_REMOVE_ITEM, payload: id });
    } else {
      dispatch({ type: TYPES.SET_DECREASE_QTY });
    }
  };

  const summaryPrice = cart.reduce( function (acc, obj) { return acc + obj.price * obj.quantity; }, 0 )

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        summaryPrice,
        addQty,
        removeQty,
        getSize,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
