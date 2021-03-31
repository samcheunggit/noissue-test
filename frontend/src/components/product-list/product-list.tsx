import React from "react";
import ProductCard from "../product-card/product-card";
import "./product-list.css";
import "../../App.css";
import { IProduct } from "../../store/cart/cart-types";

export const ProductList: React.FunctionComponent<{ products: IProduct[] }> = (
  props
) => {
  return (
    <div className="list-container">
      <div className="table-title">
        <div className="long-col column title-text">Products</div>
        <div className="normal-col column title-text">Quantity</div>
        <div className="normal-col column title-text">Total Price</div>
      </div>
      {props.products.map((product: IProduct) => (
        <ProductCard key={product.productSku} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
