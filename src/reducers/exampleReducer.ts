import produce from "immer";

import { AppActions, ActionNames } from "../types/actionData";

const defaultState = "";
const exampleReducer = produce((draftState = defaultState, action: AppActions): string => {
  switch (action.type) {
    case ActionNames.MY_ACTION: {
      // Do some stuff

      return draftState;
    }

    case ActionNames.SET_DATA: {
      return action.data;
    }

    default:
      return draftState;
  }
});

export default exampleReducer;
