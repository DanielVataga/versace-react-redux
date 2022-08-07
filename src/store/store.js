import { configureStore } from '@reduxjs/toolkit'
import { compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { cartReducer } from './cart/cart.reducer'

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }

//   next(action);
// };

// const middleWares = [loggerMiddleware];

// const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
})
