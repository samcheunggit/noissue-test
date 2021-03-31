import { baseUrl } from "../helpers/constants";
import { ICart } from "../store/cart/cart-types";
import { IOrderedItem } from "./../store/order/order-types";

const postOrder = async (items: ICart): Promise<IOrderedItem> => {
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(items),
  };
  try {
    const fetchResponse = await fetch(`${baseUrl}/order`, settings);
    const result = await fetchResponse.json();
    if (result.status === 201) {
      return result.data;
    }

    throw result.message;
  } catch (error) {
    throw error;
  }
};

export default postOrder;
