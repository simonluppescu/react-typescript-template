import { ActionNames, MyAction } from "../types/actions";

export const doSomething = (someField: string): MyAction => ({
  type: ActionNames.MY_ACTION
  // someField
});
