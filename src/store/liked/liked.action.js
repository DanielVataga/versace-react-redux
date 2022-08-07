import { createAction } from "../utils/reducer.utils";
import { LIKED_ACTION_TYPES } from "./liked.types";

export const addItemToLiked = (product) => 
  createAction(LIKED_ACTION_TYPES.ADD_ITEM_TO_LIKED, product)

export const removeProductFromLiked = (id) => 
  createAction(LIKED_ACTION_TYPES.REMOVE_ITEM_FROM_LIKED, id)

export const getSizeToLiked = (size) => 
  createAction(LIKED_ACTION_TYPES.SET_SIZE, size)