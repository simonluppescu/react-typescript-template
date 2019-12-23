import { AppActions, ActionNames } from "../types/actions";

const defaultState = "";
const myReducer = (state = defaultState, action: AppActions): string => {
  switch (action.type) {
    case ActionNames.MY_ACTION:
      return "some new state";

    default:
      return state;
  }
};
