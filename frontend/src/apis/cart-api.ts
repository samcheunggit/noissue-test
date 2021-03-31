import { baseUrl } from "../helpers/constants";
import { ICart } from "./../store/cart/cart-types";

const getCart = async (): Promise<ICart> => {
  try {
    const response = await fetch(`${baseUrl}/cart`);
    const result = await response.json();

    if (result.status === 200) {
      return result.data;
    }

    throw result.message;
  } catch (error) {
    throw error;
  }
};

export default getCart;
