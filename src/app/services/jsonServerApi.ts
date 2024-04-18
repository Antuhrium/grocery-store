import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICartProducts, IProductApi } from "../../Interfaces";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["allProducts", "cart"],
  endpoints: (build) => ({
    getAllProducts: build.query<ICartProducts[], void>({
      query: () => "products",
      providesTags: ["allProducts"],
    }),

    getICartProducts: build.query<ICartProducts[], void>({
      query: () => ({ url: "cart", method: "GET" }),
      providesTags: ["cart"],
    }),

    createCartProducts: build.mutation<void, IProductApi>({
      query: (body) => ({
        url: "cart",
        method: "POST",
        body: { body },
      }),
      invalidatesTags: ["cart"],
    }),

    updateCartProducts: build.mutation<void, ICartProducts>({
      query: (arg) => ({
        url: `cart/${arg.id}`,
        method: "PUT",
        body: { id: arg.id, body: arg.body },
      }),
      invalidatesTags: ["cart"],
    }),

    deleteCartProducts: build.mutation<void, number>({
      query: (id) => ({
        url: `cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetICartProductsQuery,
  useCreateCartProductsMutation,
  useUpdateCartProductsMutation,
  useDeleteCartProductsMutation,
} = productsApi;
