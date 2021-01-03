import { Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { AppState } from "../store/configureStore";

export type AppAsyncAction = ThunkAction<void, AppState, unknown, Action<string>>;
export type AppDispatch = ThunkDispatch<AppState, void, Action>;
