import { Cart } from "../interfaces/cart-interface";
import { Order } from "../interfaces/order-interface";
import { Product } from "../interfaces/product-interface";
import { SupplierOrder } from "../interfaces/supplier-order-interface";

const saveOrderFromCart = (orderedProducts: Cart): Order => {
  try {
    const supplierOrders = orderedProducts.products.map(
      (item: Product): SupplierOrder => {
        return {
          supplierId: item.supplier.supplierId,
          productSku: item.productSku,
          productName: item.productName,
          productType: item.productType,
          productQuantity: item.productQuantity,
          payment: item.payment,
        };
      }
    );

    // In real db, record will be created in supplier_order table based on each purchase order per supplier
    // this is just for showing purpose in console log about all records supposed to be batch created in table
    supplierOrders.forEach((order: SupplierOrder, i: number) => {
      console.log(
        `created order for supplier ${order.supplierId}: \n${JSON.stringify(
          order
        )}\n`
      );
    });

    return orderedProducts;
  } catch (e) {
    throw Error("Error while placing customer order.");
  }
};

export default saveOrderFromCart;
