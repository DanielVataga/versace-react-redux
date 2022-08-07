import { createSelector } from "@reduxjs/toolkit"

const selectCartReducer = state => state.cart

export const selectCartItems = createSelector(
  [selectCartReducer],
  (state) => state.cart
)

export const selectCartSummary = createSelector([selectCartItems], (cart) =>
  cart.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
);
