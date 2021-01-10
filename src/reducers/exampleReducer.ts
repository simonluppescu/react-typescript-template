import { AppActions, ActionNames } from "../types/actionData";

const defaultState = "";
const exampleReducer = (state = defaultState, action: AppActions): string => {
  switch (action.type) {
    case ActionNames.MY_ACTION:
      return "some new state";

    case ActionNames.SET_DATA:
      return action.data;

    default:
      return state;
  }
};

export default exampleReducer;
