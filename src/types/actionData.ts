export enum ActionNames {
  MY_ACTION
  // Action names here
}

export type MyAction = {
  type: ActionNames.MY_ACTION;
  // Other fields here
};

export type AppActions = MyAction; // | OtherAction | AnotherAction
