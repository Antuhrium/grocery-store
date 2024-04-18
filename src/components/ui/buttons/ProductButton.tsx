import { useState } from "react";
import { ICartProducts } from "../../../Interfaces";
import {
  useUpdateCartProductsMutation,
  useDeleteCartProductsMutation,
} from "../../../app/services/jsonServerApi";

const ProductButton = ({ id, body }: ICartProducts) => {
  const [updateCartProducts] = useUpdateCartProductsMutation();
  const [deleteCartProduct] = useDeleteCartProductsMutation();
  const [amount, setAmount] = useState(body.amount);

  const addProduct = () => {
    updateCartProducts({ id: id, body: { ...body, amount: amount + 1 } });
    setAmount((prev) => (prev += 1));
  };
  const removeProduct = () => {
    if (amount <= 1) {
      deleteCartProduct(id);
    }
    updateCartProducts({ id: id, body: { ...body, amount: amount - 1 } });
    setAmount((prev) => (prev -= 1));
  };

  return (
    <div>
      <div>
        <button
          className="md:w-fit px-6 py-4 rounded-xl font-medium text-sm uppercase bg-[#0B6434] text-white"
          onClick={() => removeProduct()}
        >
          -
        </button>
        <span className="px-4 font-medium text-lg text-[#0B6434]">
          {amount}
        </span>
        <button
          className="md:w-fit px-6 py-4 rounded-xl font-medium text-sm uppercase bg-[#0B6434] text-white"
          onClick={() => addProduct()}
        >
          +
        </button>
      </div>
      <button
        className="absolute top-0 right-4 px-3 mt-4 py-1 rounded-xl font-bold text-lg uppercase transition-colors text-[#ce2d2d] hover:text-white hover:bg-[#ce2d2d]"
        onClick={() => deleteCartProduct(id)}
      >
        &#x2715;
      </button>
    </div>
  );
};

export default ProductButton;
