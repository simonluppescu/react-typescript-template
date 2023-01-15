import axios from "axios";

import {
  ActionNames,
  MyAction,
  SetDataAction,
  setCurrentUserAction,
  unsetCurrentUserAction,
  signupFormChangeAction,
  loginFormChangeAction
} from "../types/actionData";
import { AppThunkAction } from "../types/common";
import { signupFormType, User } from "../types/userAuthTypes";

export const doSomething = (someField: string): MyAction => ({
  type: ActionNames.MY_ACTION
  // someField
});

export const setData = (data: string): SetDataAction => ({
  type: ActionNames.SET_DATA,
  data
});

export const checkIfLoggedIn =
  (): AppThunkAction =>
  async (dispatch, getState): Promise<any> => {
    const state = getState();

    try {
      const response = await axios.get("http://localhost:3001/logged_in", { withCredentials: true });
      if (response.data.logged_in) {
        console.log("We are logged in!");
        if (!state.loggedInUser.isLoggedIn) {
          console.log("Looks like state wasn't set. Setting it now.");

          const { email, username } = response.data.user;
          const user: User = { email, username };
          dispatch(setCurrentUser(user));
        }
      } else {
        console.log("Not logged in.");
      }
    } catch (e) {
      console.log(e);
    }
  };

export const loginUser =
  (usernameOrEmail: string, password: string): AppThunkAction =>
  async (dispatch, getState): Promise<any> => {
    const user = { username_or_email: usernameOrEmail, password };

    try {
      const response = await axios.post("http://localhost:3001/login", { user }, { withCredentials: true });
      if (response.data.logged_in) {
        const { username, email } = response.data.user;
        const user: User = { username, email };

        dispatch(setCurrentUser(user));
        console.log("Just logged in. Oh yeah.");
      } else {
        console.log("Bad credentials.");
        console.log(response.data.errors);
      }
    } catch (e) {
      console.log(e);
    }
  };

export const setCurrentUser = (user: User): setCurrentUserAction => ({
  type: ActionNames.SET_CURRENT_USER,
  user
});

export const logoutUser =
  (): AppThunkAction =>
  async (dispatch, getState): Promise<any> => {
    try {
      const response = await axios.post("http://localhost:3001/logout", {}, { withCredentials: true });
      if (response.data.logged_out) {
        dispatch(unsetCurrentUser());
        console.log("Just logged out.");
      }
    } catch (e) {
      console.log(e);
    }
  };

export const signupUser =
  (signupFormData: signupFormType): AppThunkAction =>
  async (dispatch, getState): Promise<any> => {
    const { username, email, password, passwordConfirmation } = signupFormData;

    const signupData = { username, email, password, password_confirmation: passwordConfirmation };

    try {
      const response = await axios.post("http://localhost:3001/users", { user: signupData }, { withCredentials: true });
      if (response.data.status === "created") {
        const { username, email } = response.data.user;
        const user: User = { username, email };
        dispatch(setCurrentUser(user));
      } else {
        console.log("Failed to sign up");
        if (response) console.log(response.data.errors);
      }
    } catch (e) {
      console.log(e);
    }
  };

export const unsetCurrentUser = (): unsetCurrentUserAction => ({
  type: ActionNames.UNSET_CURRENT_USER
});

export const signupFormChange = (fieldName: string, value: string): signupFormChangeAction => ({
  type: ActionNames.SIGNUP_FORM_CHANGE,
  fieldName,
  value
});

export const loginFormChange = (fieldName: string, value: string): loginFormChangeAction => ({
  type: ActionNames.LOGIN_FORM_CHANGE,
  fieldName,
  value
});

export const fetchData =
  (): AppThunkAction =>
  async (dispatch, getState): Promise<any> => {
    try {
      const response = await axios.get("https://www.example.com/api");
      const data = response.data.result;

      dispatch(setData(data));
    } catch (e) {
      // Do something with error
    }
  };
