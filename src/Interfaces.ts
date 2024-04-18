export interface IProductApi {
  productId: number;
  amount: number;
  name: string;
  type: string;
  description: string;
  price: number;
  image: string;
}

export interface IGetLocalStorage {
  key: string;
}

// export interface ISetLocalStorage extends IGetLocalStorage {
//   data: IProductApi[];
// }

export interface ICartProducts {
  id: number;
  body: IProductApi;
}

export interface IProductList {
  products: ICartProducts[];
  isProductsLoading?: boolean;
}

// export interface ICartList {
//   products: ICartProducts[];
//   isProductsLoading?: boolean;
// }

// export interface IProductButton {
//   body: IProductApi;
//   id: number;
// }

export type svgType = {
  width: number;
  height: number;
  className?: string;
};
