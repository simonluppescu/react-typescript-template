import axios from "axios";
import { ActionNames, MyAction } from "../types/actionData";
import { AppAsyncAction } from "../types/common";

export const doSomething = (someField: string): MyAction => ({
  type: ActionNames.MY_ACTION
  // someField
});

export const fetchData = (someField: string): AppAsyncAction => async (dispatch, getState): Promise<any> => {
  try {
    const response = await axios.get("https://www.example.com/api");
  } catch (e) {
    // Do something with error
  }
};

// Adjust this to use correct actions
export const setData = (someField: string): MyAction => ({
  type: ActionNames.MY_ACTION,
  someField
});
