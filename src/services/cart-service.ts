import fs from "fs";
import { Cart } from "../interfaces/cart-interface";

const fetchCart = (): Cart => {
  try {
    const data = fs.readFileSync("src/mockdb/cart.json", "utf8");
    return JSON.parse(data);
  } catch (e) {
    throw Error("Error while getting customer cart.");
  }
};

export default fetchCart;
