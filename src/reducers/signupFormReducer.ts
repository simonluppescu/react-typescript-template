import produce from "immer";

import { AppActions, ActionNames } from "../types/actionData";
import { signupFormType } from "../types/userAuthTypes";

const defaultState: signupFormType = { username: "", email: "", password: "", passwordConfirmation: "", errors: "" };
const signupFormReducer = produce((draftState, action: AppActions): void => {
  switch (action.type) {
    case ActionNames.SIGNUP_FORM_CHANGE: {
      draftState[action.fieldName as keyof signupFormType] = action.value;

      break;
    }

    default:
      break;
  }
}, defaultState);

export default signupFormReducer;
