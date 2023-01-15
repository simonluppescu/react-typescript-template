import produce from "immer";

import { AppActions, ActionNames } from "../types/actionData";
import { loginFormType } from "../types/userAuthTypes";

const defaultState: loginFormType = { usernameOrEmail: "", password: "" };
const loginFormReducer = produce((draftState, action: AppActions): void => {
  switch (action.type) {
    case ActionNames.LOGIN_FORM_CHANGE: {
      draftState[action.fieldName as keyof loginFormType] = action.value;

      break;
    }

    default:
      break;
  }
}, defaultState);

export default loginFormReducer;
