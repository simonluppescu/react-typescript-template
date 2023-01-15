import { User } from "./userAuthTypes";

export enum ActionNames {
  MY_ACTION = "MY_ACTION",
  SET_DATA = "DATA/SET",
  SET_CURRENT_USER = "CURRENT_USER/SET",
  UNSET_CURRENT_USER = "CURRENT_USER/UNSET",
  SIGNUP_FORM_CHANGE = "SIGNUP_FORM/CHANGE",
  LOGIN_FORM_CHANGE = "LOGIN_FORM/CHANGE"
}

export type MyAction = {
  type: ActionNames.MY_ACTION;
  // Other fields here
};

export type SetDataAction = {
  type: ActionNames.SET_DATA;
  data: string;
};

export type setCurrentUserAction = {
  type: ActionNames.SET_CURRENT_USER;
  user: User;
};

export type unsetCurrentUserAction = {
  type: ActionNames.UNSET_CURRENT_USER;
};

export type signupFormChangeAction = {
  type: ActionNames.SIGNUP_FORM_CHANGE;
  fieldName: string;
  value: string;
};

export type loginFormChangeAction = {
  type: ActionNames.LOGIN_FORM_CHANGE;
  fieldName: string;
  value: string;
};

export type AppActions =
  | MyAction
  | SetDataAction
  | setCurrentUserAction
  | unsetCurrentUserAction
  | signupFormChangeAction
  | loginFormChangeAction;
