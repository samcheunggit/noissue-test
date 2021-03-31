import { Supplier } from "./supplier-interface";
import { Payment } from "./payment-interface";

export interface Product {
  productSku: string;
  productType: string;
  productName: string;
  productQuantity: number;
  productDescription: string;
  supplier: Supplier;
  payment: Payment;
}
