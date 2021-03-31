import { Payment } from "./payment-interface";
import { Product } from "./product-interface";

export interface Order {
  products: Product[];
  shippingFees: {
    totalFee: Payment;
    supplierShippingFees: {
      supplierId: string;
      payment: Payment;
    }[];
  };
}
