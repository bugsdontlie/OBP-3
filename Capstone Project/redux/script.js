const redux = require("redux");

//action
//reducer
//store

const initialState = {
  products: [
    {
      name: bottle,
      price: 100,
    },
    {
      name: shirt,
      price: 200,
    },
    {
      name: charger,
      price: 50,
    },
  ],
  boughtProducts: [],
};

const BUY_BOTTLE = "BUY_BOTTLE";
const BUY_SHIRT = "BUY_SHIRT";

const buyBottleAction = () => {
  return {
    type: BUY_BOTTLE,
  };
};

const buyShirtAction = () => {
  return {
    type: BUY_SHIRT,
  };
};

/* UPDATED STATE AFTER BUY_BOTTLE ACTION IS PERFORMED
const initialState = {
   products: [
    {
      name: bottle,
      price: 100,
    },
    {
      name: shirt,
      price: 200,
    },
    {
      name: charger,
      price: 50,
    },
  ],
  boughtProducts: [{
      name: bottle,
      price: 100,
    }]
};
*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BOTTLE:
      return {
        ...state,
        boughtProducts: [...state.boughtProducts, state.products[0]],
      };
    case BUY_SHIRT:
      return {
        ...state,
        boughtProducts: [...state.boughtProducts, state.products[1]],
      };

    default:
      return state;
  }
};
