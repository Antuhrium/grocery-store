export interface IProductApi {
  productId: number;
  amount: number;
  name: string;
  type: string;
  description: string;
  price: number;
  image: string;
}

export interface ICartProducts {
  id: number;
  body: IProductApi;
}

export interface IProductList {
  products: ICartProducts[];
  isProductsLoading?: boolean;
}

export type svgType = {
  width: number;
  height: number;
  className?: string;
};
