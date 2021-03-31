import React, { createContext, useReducer, PropsWithChildren } from "react";
import { IOrderedItem } from "./order-types";
import reducer from "./order-reducer";

const initialState: IOrderedItem = {
  products: [],
  customerId: "",
};

const initialStoreContext = {
  orderState: initialState,
  orderDispatch: (action: IOrderedItem) => {},
};

const orderStoreContext = createContext(initialStoreContext);

const OrderStateProvider = ({ children }: PropsWithChildren<any>) => {
  const [orderState, orderDispatch] = useReducer(
    reducer,
    initialStoreContext.orderState
  );
  return (
    <orderStoreContext.Provider
      value={{ orderState, orderDispatch }}
      children={children}
    />
  );
};

export { orderStoreContext, OrderStateProvider };
