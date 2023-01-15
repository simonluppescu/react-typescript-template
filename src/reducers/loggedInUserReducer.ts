import produce from "immer";

import { AppActions, ActionNames } from "../types/actionData";
import { LoggedInUserType } from "../types/userAuthTypes";

const defaultState: LoggedInUserType = { isLoggedIn: false, user: null };
const loggedInUserReducer = produce((draftState, action: AppActions): void => {
  switch (action.type) {
    case ActionNames.SET_CURRENT_USER: {
      draftState.isLoggedIn = true;
      draftState.user = action.user;

      break;
    }

    case ActionNames.UNSET_CURRENT_USER: {
      draftState.isLoggedIn = false;
      draftState.user = null;

      break;
    }

    default:
      break;
  }
}, defaultState);

export default loggedInUserReducer;
