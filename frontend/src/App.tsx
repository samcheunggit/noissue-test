import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./pages/cart/cart";
import Confirmation from "./pages/confirmation/confirmation";
import { StateProvider } from "./store/cart/cart-context";
import { OrderStateProvider } from "./store/order/order-context";

export const App: React.FunctionComponent<{}> = () => {
  return (
    <StateProvider>
      <OrderStateProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Cart} exact />
            <Route path="/confirmation" component={Confirmation} exact />
          </Switch>
        </BrowserRouter>
      </OrderStateProvider>
    </StateProvider>
  );
};

export default App;
