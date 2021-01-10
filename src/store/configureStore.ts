import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import exampleReducer from "../reducers/exampleReducer";

const allMiddleware = [reduxThunk];
const rootReducer = combineReducers({
  example: exampleReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...allMiddleware)));
