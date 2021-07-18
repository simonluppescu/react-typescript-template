import axios from "axios";

import { ActionNames, MyAction, SetDataAction } from "../types/actionData";
import { AppThunkAction } from "../types/common";

export const doSomething = (someField: string): MyAction => ({
  type: ActionNames.MY_ACTION
  // someField
});

export const fetchData = (): AppThunkAction => async (dispatch, getState): Promise<any> => {
  try {
    const response = await axios.get("https://www.example.com/api");
    const data = response.data.result;

    dispatch(setData(data));
  } catch (e) {
    // Do something with error
  }
};

export const setData = (data: string): SetDataAction => ({
  type: ActionNames.SET_DATA,
  data
});
