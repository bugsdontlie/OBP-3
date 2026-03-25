import { countReducer } from "./count/reducer";
import { productReducer } from "./product/reducer";

export const rootReducer = combineReducers({
  amazon: productReducer,
  count_app: countReducer,
});
