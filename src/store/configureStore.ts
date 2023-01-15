import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import exampleReducer from "../reducers/exampleReducer";
import loggedInUserReducer from "../reducers/loggedInUserReducer";
import signupFormReducer from "../reducers/signupFormReducer";
import loginFormReducer from "../reducers/loginFormReducer";

const allMiddleware = [reduxThunk];
const rootReducer = combineReducers({
  example: exampleReducer,
  loggedInUser: loggedInUserReducer,
  signupForm: signupFormReducer,
  loginForm: loginFormReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...allMiddleware)));
