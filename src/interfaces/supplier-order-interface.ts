import { Payment } from "./payment-interface";

export interface SupplierOrder {
  supplierId: string;
  productSku: string;
  productName: string;
  productType: string;
  productQuantity: number;
  payment: Payment;
}
