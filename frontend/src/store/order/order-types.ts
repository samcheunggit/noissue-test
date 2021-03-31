import { IProduct, IPayment } from "./../cart/cart-types";

export interface IOrderedItem {
  products: IProduct[];
  shippingFees?: {
    totalFee: IPayment;
    supplierShippingFees: {
      supplierId: string;
      payment: IPayment;
    }[];
  };
  customerId: string;
}
