import express from "express";
import saveOrderFromCart from "../services/order-service";

const placeOrder = (req: express.Request, res: express.Response) => {
  try {
    const cart = req.body;
    const purchasedOrder = saveOrderFromCart(cart);

    return res.status(201).json({
      status: 201,
      data: purchasedOrder,
      message: "Placed Order Succesfully",
    });
  } catch (e) {
    return res.status(500).json({ status: 500, message: e.message });
  }
};

export default placeOrder;
