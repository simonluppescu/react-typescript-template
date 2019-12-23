import { ActionNames, MyAction } from "../types/actionData";

export const doSomething = (someField: string): MyAction => ({
  type: ActionNames.MY_ACTION
  // someField
});
