import express from "express";
import fetchCart from "../services/cart-service";

const getCart = (req: express.Request, res: express.Response) => {
  try {
    const cart = fetchCart();
    if (cart) {
      return res
        .status(200)
        .json({ status: 200, data: cart, message: "Get Cart Succesfully" });
    }

    res.status(404).send("cart not found");
  } catch (e) {
    return res.status(500).json({ status: 500, message: e.message });
  }
};

export default getCart;
