import { createContext, useReducer } from "react";

export const LikedContext = createContext({
  likedItems: [],
  size: 37
});

const TYPES = {
  ADD_ITEM_TO_LIKED: "ADD_ITEM_TO_LIKED",
  REMOVE_ITEM_FROM_LIKED: "REMOVE_ITEM_FROM_LIKED",
  SET_SIZE: "SET_SIZE"
};

const initialState = {
  likedItems: [],
  size: 37
};

const reducer = (state, action) => {
  const { type, payload } = action;
  const { likedItems, size } = state;

  switch (type) {
    case TYPES.ADD_ITEM_TO_LIKED:
      return { ...state, likedItems: [...likedItems, {...payload, size: size}] };
    case TYPES.REMOVE_ITEM_FROM_LIKED:
      return { ...state, likedItems: likedItems.filter(item => item.id !== payload) }
    case TYPES.SET_SIZE:
      return { ...state, size: +payload }

    default:
      throw new Error(`Unhandled type: ${type}`);
  }
};

export const LikedProvider = ({ children }) => {
  const [{ likedItems, size }, dispatch] = useReducer(reducer, initialState);

  const addItemToLiked = (product) => {
    dispatch({type: TYPES.ADD_ITEM_TO_LIKED, payload: product})
  };

  const removeProductFromLiked = (id) => {
    dispatch({ type: TYPES.REMOVE_ITEM_FROM_LIKED, payload: id })
  }

  const getSizeToLiked = (size) => {
    dispatch({ type: TYPES.SET_SIZE, payload: size })
  }

  return (
    <LikedContext.Provider value={{ 
        likedItems, 
        addItemToLiked, 
        removeProductFromLiked, 
        getSizeToLiked, 
        size 
      }}>
      {children}
    </LikedContext.Provider>
  );
};
