import { ICartProducts } from "../Interfaces";
import MainButton from "./ui/buttons/MainButton";
import { useCreateCartProductsMutation } from "../app/services/jsonServerApi";
import ProductButton from "./ui/buttons/ProductButton";

const ProductItem = ({ id, body }: ICartProducts) => {
  const [createCartProducts] = useCreateCartProductsMutation();

  const addProductToCarts = () => {
    createCartProducts({ ...body, amount: 1 });
  };

  return (
    <div className="py-8 flex flex-col items-center justify-center gap-4 border border-[#0B6434] rounded-md relative">
      <div className="max-w-[150px] lg:max-w-[214px] max-h-[160px] rounded-3xl">
        <img
          className="w-full h-full rounded-lg"
          src={body.image}
          alt={body.name}
        />
      </div>
      <h4 className="text-2xl">{body.name}</h4>
      <div className="flex gap-4">
        <span className="text-2xl">{body.type}</span>
        <span className="text-2xl">${body.price}</span>
      </div>

      {body.amount === undefined ? (
        <MainButton
          onClick={addProductToCarts}
          className="bg-[#0B6434] text-white"
        >
          Add to Cart
        </MainButton>
      ) : (
        <ProductButton id={id} body={body} />
      )}
    </div>
  );
};

export default ProductItem;
