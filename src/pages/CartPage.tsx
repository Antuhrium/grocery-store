import { useGetICartProductsQuery } from "../app/services/jsonServerApi";
import ProductList from "../components/ProductList";

const CartPage = () => {
  const { data = [], isLoading } = useGetICartProductsQuery();

  return (
    <section className="container mx-auto px-5 md:px-0 my-20 h-full">
      {data.length === 0 ? (
        <h3 className="mb-8 font-semibold text-3xl">
          No Products in your Cart..
        </h3>
      ) : (
        <>
          <h3 className="mb-8 font-semibold text-3xl uppercase">
            Your Products
          </h3>
          <ProductList products={data} isProductsLoading={isLoading} />
        </>
      )}
    </section>
  );
};

export default CartPage;
