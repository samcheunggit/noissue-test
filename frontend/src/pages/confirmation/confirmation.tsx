import React, { useContext, useEffect } from "react";
import "./confirmation.css";
import "../../App.css";
import ProductList from "../../components/product-list/product-list";
import Order from "../../components/order/order";
import { useHistory } from "react-router-dom";
import { orderStoreContext } from "../../store/order/order-context";
import { calculateTotal } from "../../helpers/general";

export const Confirmation: React.FunctionComponent<{}> = () => {
  const history = useHistory();
  const { orderState } = useContext(orderStoreContext);

  const backToCart = () => {
    history.push("/");
  };

  useEffect(() => {
    if (orderState.products.length === 0) {
      alert('No product in confirmation page, you will be redirect to cart.')
      backToCart()
    }
  }, [])

  return (
    <div className="main">
      <header className="confirm-header">
        <p className="header-title">ORDER CONFIRMATION</p>
        <p className="header-desc">Thank you for your order!</p>
        <p className="header-desc">
          We've received your order and will contact you as soon as your package
          is shipped. You can find your purchase information below.
        </p>
      </header>
      <h2>Order Summary</h2>
      <h5>{new Date().toLocaleDateString()}</h5>
      <ProductList products={orderState.products} />
      <Order
        total={calculateTotal(orderState.products)}
        shippingFee={
          orderState.shippingFees
            ? orderState.shippingFees.totalFee
            : {
                currency: "",
                symbol: "",
                total: 0,
              }
        }
        hasBorder={false}
        headerTx="Order Total"
        buttonTx="Continue Shopping"
        btnClicked={backToCart}
      />
    </div>
  );
};

export default Confirmation;
