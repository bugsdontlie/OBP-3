const redux = require("redux");
const { createStore, combineReducers } = redux;
//action
//reducer
//store

const initialProductState = {
  products: [
    {
      name: "bottle",
      price: 100,
    },
    {
      name: "shirt",
      price: 200,
    },
    {
      name: "charger",
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

const productReducer = (state = initialProductState, action) => {
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

// const store = createStore(productReducer);

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(buyBottleAction());
// store.dispatch(buyShirtAction());
// store.dispatch(buyShirtAction());

// store.dispatch(buyShirtAction());
// unsubscribe();

/* 
for store setup:

ACTION TYPE
ACTION
REDUCER (with  INITIAL_STATE)
STORE
SUBSCRIBE

for usage of our store:
dispatch(action)
unsubscribe()
*/

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const incrementAction = (x = 1) => {
  return {
    type: INCREMENT,
    payload: {
      value: x,
    },
  };
};

const decrementAction = (x = 1) => {
  return {
    type: DECREMENT,
    payload: {
      value: x,
    },
  };
};

const initialCountState = {
  count: 0,
};

const countReducer = (state = initialCountState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload.value,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload.value,
      };

    default:
      return state;
  }
};

// productReducer, countReducer
const rootReducer = combineReducers({
  amazon: productReducer,
  count_app: countReducer,
});

const store = createStore(rootReducer);

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log(
    "state",
    state,
    "\n",
    "\n",
    "\n",
    "amazon",
    state.amazon,
    "\n",
    "\n",
    "\n",
    "count_app",
    state.count_app,
  );
});

store.dispatch(incrementAction(10)); //10
store.dispatch(decrementAction()); //9
store.dispatch(decrementAction()); //8
store.dispatch(incrementAction()); //9
store.dispatch(buyBottleAction());
store.dispatch(buyShirtAction());
store.dispatch(buyShirtAction());
unsubscribe();

/* rootState = {
  amazon: {
    products: [
      {
        name: "bottle",
        price: 100,
      },
      {
        name: "shirt",
        price: 200,
      },
      {
        name: "charger",
        price: 50,
      },
    ],
    boughtProducts: [],
  },

  count_app: {
    count: 0,
  },
};
 */
