import { LIKED_ACTION_TYPES } from "./liked.types";

const LIKED_INITIAL_STATE = {
  liked: [],
  size: 37
};

export const likedReducer = (state = LIKED_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  const { liked, size } = state;

  switch (type) {
    case LIKED_ACTION_TYPES.ADD_ITEM_TO_LIKED:
      return { ...state, liked: [...liked, {...payload, size: size}] };
    case LIKED_ACTION_TYPES.REMOVE_ITEM_FROM_LIKED:
      return { ...state, liked: liked.filter(item => item.id !== payload) }
    case LIKED_ACTION_TYPES.SET_SIZE:
      return { ...state, size: +payload }

    default:
      return { ...state }
  }
};