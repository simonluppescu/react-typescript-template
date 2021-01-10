export enum ActionNames {
  MY_ACTION = "MY_ACTION",
  SET_DATA = "DATA/SET"
  // Action names here
}

export type MyAction = {
  type: ActionNames.MY_ACTION;
  // Other fields here
};

export type SetDataAction = {
  type: ActionNames.SET_DATA;
  data: string;
};

export type AppActions = MyAction | SetDataAction; // | OtherAction | AnotherAction
