// import { ApiError } from '../../api/type/ApiError';
// import { ReducerAction } from '../../store/reducer/ReducerAction';
// import { ReducerActionCreator } from '../../store/reducer/ReducerActionCreator';
// import { ExceptionUtils } from '../utils/exception/ExceptionUtils';
// import { ProductsApiResponse } from './ProductService';
// import { ProductStorage } from './ProductStorage';
// import { Product } from './type/Product';

// type Action = ReducerAction<ActionType, Payload>;
// const action = ReducerActionCreator<ActionType, Payload | ApiError>();

// type Products = Pick<ProductsApiResponse, 'data' | 'paginator'>;
// type ProductId = Pick<Product, 'id'>;
// type Payload = Product | Products | ProductId;

// type ActionType =
//   | 'PRODUCT_REQUEST'
//   | 'PRODUCT_FIND_ALL'
//   | 'PRODUCT_FIND_BY_ID'
//   | 'PRODUCT_SAVE'
//   | 'PRODUCT_UPDATE_BY_ID'
//   | 'PRODUCT_DELETE_BY_ID'
//   | 'PRODUCT_ERROR';

// export type ProductState = {
//   loading: boolean;
//   data: {
//     product: Product | null;
//     products: Products | null;
//   };
//   error: ApiError | null;
// };

// const initialState: ProductState = {
//   loading: false,
//   data: {
//     product: new ProductStorage().find(),
//     products: null,
//   },
//   error: null,
// };

// const reducer = (state = initialState, action: Action): ProductState => {
//   const { type, payload } = action;

//   switch (type) {
//     case 'PRODUCT_REQUEST':
//       return { ...state, loading: true, error: null };
//     case 'PRODUCT_FIND_ALL':
//       return {
//         ...state,
//         loading: false,
//         error: null,
//         data: {
//           ...state.data,
//           products: payload as Products,
//         },
//       };
//     case 'PRODUCT_FIND_BY_ID':
//     case 'PRODUCT_SAVE':
//     case 'PRODUCT_UPDATE_BY_ID':
//       return {
//         ...state,
//         loading: false,
//         error: null,
//         data: {
//           ...state.data,
//           product: payload as Product,
//         },
//       };
//     case 'PRODUCT_DELETE_BY_ID':
//       return deleteById(state, payload as ProductId);
//     case 'PRODUCT_ERROR':
//       return error(state, payload as Error);
//     default:
//       return state;
//   }
// };

// const deleteById = (state: ProductState, payload: ProductId): ProductState => {
//   if (!state.data.products) {
//     return state;
//   }

//   const productsDataUpdated = state.data.products.data.filter(
//     (product) => product.id !== payload.id,
//   );

//   return {
//     ...state,
//     loading: false,
//     error: null,
//     data: {
//       ...state.data,
//       products: {
//         ...state.data.products,
//         data: productsDataUpdated,
//       },
//     },
//   };
// };

// const error = (state: ProductState, payload: ApiError): ProductState => {
//   ExceptionUtils.log(payload);

//   return { ...state, loading: false, error: payload };
// };

// export const ProductReducer = {
//   action,
//   reducer,
// };
export {};
