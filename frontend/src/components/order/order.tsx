import React from "react";
import "./order.css";
import "../../App.css";
import { IPayment } from "../../store/cart/cart-types";
import { showPrice, sumPayment } from "../../helpers/general";

export const Order: React.FunctionComponent<{
  total: IPayment;
  shippingFee: IPayment;
  headerTx: string;
  buttonTx: string;
  hasBorder: boolean;
  btnClicked: Function;
}> = (props) => {
  return (
    <div className={`${!props.hasBorder || "border"} order-container`}>
      <h2>{props.headerTx}</h2>
      <div className="hr" />
      <OrderSection leftTx={"Item total:"} rightTx={showPrice(props.total)} />
      <OrderSection
        leftTx={"Shipping fee:"}
        rightTx={showPrice(props.shippingFee)}
      />
      <div className="hr" />
      <OrderSection
        leftTx={"Total:"}
        rightTx={showPrice(sumPayment(props.total, props.shippingFee))}
      />
      <button className="submit-btn" onClick={() => props.btnClicked()}>
        {props.buttonTx}
      </button>
    </div>
  );
};

const OrderSection: React.FunctionComponent<{
  leftTx: string;
  rightTx: string;
}> = (props) => {
  return (
    <div className="order-section">
      <p>{props.leftTx}</p>
      <p>{props.rightTx}</p>
    </div>
  );
};

export default Order;
