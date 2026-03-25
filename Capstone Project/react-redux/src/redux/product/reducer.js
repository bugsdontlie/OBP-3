import { BUY, DECREMENT, INCREMENT } from "./types";

const initialState = {
  products: ["apple", "banana", "guava"],
  boughtProducts: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY:
      const ind = action.payload.ind;
      return {
        ...state,
        boughtProducts: state.boughtProducts.push(state.products[ind]),
      };

    default:
      return state;
  }
};
