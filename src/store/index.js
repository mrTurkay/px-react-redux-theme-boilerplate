import { combineReducers, createStore } from "redux";

import { counterReducer } from "./counter/reducer";
import { userReducer } from "./user/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

let store = createStore(rootReducer);

export default store;
