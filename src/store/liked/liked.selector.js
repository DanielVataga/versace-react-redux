import { createSelector } from "@reduxjs/toolkit"

const selectLikedReducer = state => state.liked

export const selectLikedItems = createSelector(
  [selectLikedReducer],
  (state) => state.liked
)