import { createAction } from "../utils/reducer.utils";

import { CART_ACTION_TYPES } from "./cart.types";

export const addProductToCart = (product) =>
  createAction(CART_ACTION_TYPES.SET_TO_CART, product);

export const getSize = (size) =>
  createAction(CART_ACTION_TYPES.SET_SIZE, size);

export const removeProductFromCart = (id) =>
  createAction(CART_ACTION_TYPES.SET_REMOVE_ITEM, id);


export const addQty = (cart, id) => {
  cart.find((el) => el.id === id).quantity++;
  return createAction(CART_ACTION_TYPES.SET_ADD_QTY);
};

export const removeQty = (cart, id) => {
  const prod = cart.find((el) => el.id === id);
  prod.quantity--;
  if (prod.quantity === 0) {
    cart.filter((item) => item.id !== id);
    return createAction(CART_ACTION_TYPES.SET_REMOVE_ITEM, id);
  } else {
    return createAction(CART_ACTION_TYPES.SET_DECREASE_QTY);
  }
};