import { useGetAllProductsQuery } from "../app/services/jsonServerApi";
import ProductList from "./ProductList";

const Products = () => {
  const { data = [], isLoading } = useGetAllProductsQuery();

  return (
    <section className="container mx-auto px-5 md:px-0 my-20">
      <h3 className="mb-8 font-semibold text-3xl uppercase">All Products</h3>
      <ProductList products={data} isProductsLoading={isLoading} />
    </section>
  );
};

export default Products;
