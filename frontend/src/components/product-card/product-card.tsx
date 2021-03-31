import React from "react";
import "./product-card.css";
import "../../App.css";
import { IProduct } from "../../store/cart/cart-types";
import { showPrice } from "../../helpers/general";

export const ProductCard: React.FunctionComponent<{ product: IProduct }> = (
  props
) => {
  return (
    <div className="card-container">
      <div className="column long-col">
        <p className="title">{props.product.productName}</p>
        <p className="sub-title">{props.product.productDescription}</p>
        <div className="desc">Type: {props.product.productType}</div>
        <div className="desc">Id: {props.product.productSku}</div>
        <div className="desc">
          Supplier id: {props.product.supplier.supplierId}
        </div>
        <div className="desc">
          Supplier Name: {props.product.supplier.supplierName}
        </div>
      </div>
      <div className="column normal-col">
        <p className="title">{props.product.productQuantity}</p>
      </div>
      <div className="column normal-col">
        <p className="title">{showPrice(props.product.payment)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
