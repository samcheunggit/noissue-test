import React, { createContext, useReducer, PropsWithChildren } from "react";
import { ICart } from "./cart-types";
import reducer from "./cart-reducer";

// initial value for cart context
const initialState: ICart = {
  products: [],
};

const initialStoreContext = {
  state: initialState,
  dispatch: (action: ICart) => {},
};

const cartStoreContext = createContext(initialStoreContext);

const StateProvider = ({ children }: PropsWithChildren<any>) => {
  const [state, dispatch] = useReducer(reducer, initialStoreContext.state);
  return (
    <cartStoreContext.Provider
      value={{ state, dispatch }}
      children={children}
    />
  );
};

export { cartStoreContext, StateProvider };
