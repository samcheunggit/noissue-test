import { ICart } from "./cart-types";

const reducer = (state: ICart, action: ICart): ICart => {
  // simply update the state of cart context
  return { ...state, ...action };
};

export default reducer;
