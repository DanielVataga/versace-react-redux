import { CART_ACTION_TYPES } from './cart.types'

const CART_INITIAL_STATE = {
  cart: [],
  size: 37,
  summary: 0
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  const { cart, size } = state;

  switch (type) {
    case CART_ACTION_TYPES.SET_TO_CART:
      return { ...state, cart: [...cart, { ...payload, size: size }] };
    case CART_ACTION_TYPES.SET_SIZE:
      return { ...state, size: +payload };
    case CART_ACTION_TYPES.SET_REMOVE_ITEM:
      return { ...state, cart: cart.filter((item) => item.id !== payload) };
    case CART_ACTION_TYPES.SET_ADD_QTY:
      return { ...state, cart: [...cart] };
    case CART_ACTION_TYPES.SET_DECREASE_QTY:
      return { ...state, cart: [...cart] };
    case CART_ACTION_TYPES.SET_UPDATE_SUMMARY:
      return { ...state, summary: payload }
    default:
      return state
  }
};