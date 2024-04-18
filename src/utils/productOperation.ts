import { IProductApi } from "../Interfaces";
import {
  useCreateCartProductsMutation,
  useDeleteCartProductsMutation,
  useUpdateCartProductsMutation,
} from "../app/services/jsonServerApi";

export const addProductToCart = ({ ...body }: IProductApi) => {
  const [createCartProducts] = useCreateCartProductsMutation();
  createCartProducts({ ...body, amount: 1 });
};

type updateProductType = {
  body: IProductApi;
  amount: number;
  id: number;
};

export const incrementAmount = ({ body, amount, id }: updateProductType) => {
  const [updateCartProducts] = useUpdateCartProductsMutation();
  updateCartProducts({ id: id, body: { ...body, amount: amount + 1 } });
};
export const decrementAmount = ({ body, amount, id }: updateProductType) => {
  const [updateCartProducts] = useUpdateCartProductsMutation();
  const [deleteCartProducts] = useDeleteCartProductsMutation();
  if (amount <= 1) {
    deleteCartProducts(id);
  }
  updateCartProducts({ id: id, body: { ...body, amount: amount - 1 } });
};
