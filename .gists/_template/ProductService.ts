// import { AxiosRequestConfig } from 'axios';
// import { BaseApi } from '../../api/BaseApi';
// import { ApiPageableResponse } from '../../api/type/ApiPageableResponse';
// import { ApiResponse } from '../../api/type/ApiResponse';
// import { Product } from './type/Product';

// export type ProductsApiResponse = ApiPageableResponse<Product, Error>;
// export type ProductApiResponse = ApiResponse<Product, Error>;

// const BASE_URL = '/products';

// const findAll = async (
//   keyword?: string,
//   page?: string,
//   pageLimit?: string,
//   sort?: string,
// ): Promise<ProductsApiResponse> => {
//   try {
//     const endpoint = `${BASE_URL}`;
//     const config: AxiosRequestConfig = {
//       params: {
//         keyword: keyword ?? null,
//         page: page ?? null,
//         pageLimit: pageLimit ?? null,
//         sort: sort ?? null,
//       },
//     };

//     const response = await BaseApi.http.get<ProductsApiResponse>(endpoint, config);
//     const { data, status } = response;

//     const apiResponse: ProductsApiResponse = {
//       data: data.data,
//       paginator: data.paginator,
//       error: data.error,
//       status: status,
//     };

//     return Promise.resolve(apiResponse);
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// const findById = async (id: string): Promise<ProductApiResponse> => {
//   try {
//     const endpoint = `${BASE_URL}/${id}`;

//     const response = await BaseApi.http.get<ProductApiResponse>(endpoint);
//     const { data, status } = response;

//     const apiResponse: ProductApiResponse = {
//       data: data.data,
//       error: data.error,
//       status: status,
//     };

//     return Promise.resolve(apiResponse);
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// const save = async (entity: Product): Promise<ProductApiResponse> => {
//   try {
//     const endpoint = `${BASE_URL}`;

//     const response = await BaseApi.http.post<ProductApiResponse>(endpoint, entity);
//     const { data, status } = response;

//     const apiResponse: ProductApiResponse = {
//       data: data.data,
//       error: data.error,
//       status: status,
//     };

//     return Promise.resolve(apiResponse);
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// const updateById = async (id: string, query: Partial<Product>): Promise<ProductApiResponse> => {
//   try {
//     const endpoint = `${BASE_URL}/${id}`;

//     const response = await BaseApi.http.patch<ProductApiResponse>(endpoint, query);
//     const { data, status } = response;

//     const apiResponse: ProductApiResponse = {
//       data: data.data,
//       error: data.error,
//       status: status,
//     };

//     return Promise.resolve(apiResponse);
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// const deleteById = async (id: string): Promise<ProductApiResponse> => {
//   try {
//     const endpoint = `${BASE_URL}/${id}`;

//     const response = await BaseApi.http.delete(endpoint);
//     const { data, status } = response;

//     const apiResponse: ProductApiResponse = {
//       error: data.error,
//       status: status,
//     };

//     return Promise.resolve(apiResponse);
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// export const ProductService = {
//   findAll,
//   findById,
//   save,
//   updateById,
//   deleteById,
// };
export {};
