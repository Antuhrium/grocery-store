import { IProductList } from "../Interfaces";

import ProductItem from "./ProductItem";

const ProductList = ({ products, isProductsLoading }: IProductList) => {
  if (isProductsLoading) return <span>Loading...</span>;

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-4">
      {products.map(({ id, body }) => {
        if (body == undefined) return;
        return <ProductItem key={id} id={id} body={body} />;
      })}
    </div>
  );
};

export default ProductList;
