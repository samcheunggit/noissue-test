export interface ICart {
  products: IProduct[];
  shippingFees?: {
    totalFee: IPayment;
    supplierShippingFees: {
      supplierId: string;
      payment: IPayment;
    }[];
  };
}

export interface IProduct {
  productSku: string;
  productType: string;
  productName: string;
  productQuantity: number;
  productDescription: string;
  supplier: ISupplier;
  payment: IPayment;
}

export interface ISupplier {
  supplierId: string;
  supplierName: string;
}

export interface IPayment {
  currency: string;
  symbol: string;
  total: number;
}
