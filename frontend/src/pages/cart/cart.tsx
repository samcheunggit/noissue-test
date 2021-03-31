import React, { useContext, useEffect } from "react";
import "./cart.css";
import "../../App.css";
import ProductList from "../../components/product-list/product-list";
import Order from "../../components/order/order";
import { useHistory } from "react-router-dom";
import { cartStoreContext } from "../../store/cart/cart-context";
import { orderStoreContext } from "../../store/order/order-context";
import { ICart } from "../../store/cart/cart-types";
import { IOrderedItem } from "../../store/order/order-types";
import getCart from "../../apis/cart-api";
import { calculateTotal } from "../../helpers/general";
import postOrder from "../../apis/order-api";

export const Cart: React.FunctionComponent<{}> = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(cartStoreContext);
  const { orderDispatch } = useContext(orderStoreContext);

  const placeOrder = () => {
    postOrder(state)
      .then((result: IOrderedItem) => {
        orderDispatch(result);
        history.push("/confirmation");
      })
      .catch((err) => {
        alert(`Error when saving your order: ${err}`);
      });
  };

  useEffect(() => {
    getCart()
      .then((result: ICart) => {
        dispatch(result);
      })
      .catch((err) => {
        alert(`Error when getting cart: ${err}`);
      });
  }, [dispatch]);

  return (
    <div className="main">
      <header className="header">
        <p className="header-tx">{state.products.length} item(s) in your cart</p>
      </header>
      <div className="cart-container">
        <ProductList products={state.products} />
        <Order
          total={calculateTotal(state.products)}
          shippingFee={
            state.shippingFees
              ? state.shippingFees.totalFee
              : {
                  currency: "",
                  symbol: "",
                  total: 0,
                }
          }
          headerTx="Order Summary"
          buttonTx="Submit"
          btnClicked={placeOrder}
          hasBorder
        />
      </div>
    </div>
  );
};

export default Cart;
