import { IPayment, IProduct } from "../store/cart/cart-types";

export const showPrice = (payment: IPayment): string => {
  return `${payment.currency}${payment.symbol}${payment.total}`;
};

export const calculateTotal = (products: IProduct[]): IPayment => {

  // convert product to payment object and sum them togther
  return products.reduce(
    (a: IPayment, c: IProduct) => {
      // check if it is initial value
      if (a.currency === "" && a.symbol === "" && a.total === 0) {
        a = { ...c.payment, total: 0 };
      }

      return sumPayment(a, c.payment);
    },
    {
      currency: "",
      symbol: "",
      total: 0,
    }
  );
};

export const sumPayment = (a: IPayment, b: IPayment): IPayment => {
  if (a.currency === b.currency) {
    const newVal = Number(a.total) + Number(b.total);
    return { ...a, total: newVal };
  } else {
    // handle different currency logic
  }

  // empty object if error
  return {
    currency: "",
    symbol: "",
    total: 0,
  };
};
