import { IOrderedItem } from "./order-types";

const reducer = (state: IOrderedItem, action: IOrderedItem): IOrderedItem => {
  return { ...state, ...action };
};

export default reducer;
