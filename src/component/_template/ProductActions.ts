// import { Dispatch } from 'redux';
// import { ProductReducer } from './ProductReducer';
// import { ProductService } from './ProductService';
// import { Product } from './type/Product';

// const findAll =
//   (keyword?: string, page?: string, pageLimit?: string, sort?: string) =>
//   async (dispatch: Dispatch): Promise<void> => {
//     try {
//       dispatch(ProductReducer.action('PRODUCT_REQUEST'));

//       const response = await ProductService.findAll(keyword, page, pageLimit, sort);
//       const { data, paginator, error } = response;

//       if (error) {
//         dispatch(ProductReducer.action('PRODUCT_ERROR', error));
//         return;
//       }

//       dispatch(ProductReducer.action('PRODUCT_FIND_ALL', { data, paginator }));
//     } catch (error) {
//       dispatch(ProductReducer.action('PRODUCT_ERROR', error));
//     }
//   };

// const findById =
//   (id: string) =>
//   async (dispatch: Dispatch): Promise<void> => {
//     try {
//       dispatch(ProductReducer.action('PRODUCT_REQUEST'));

//       const response = await ProductService.findById(id);
//       const { data, error } = response;

//       if (error) {
//         dispatch(ProductReducer.action('PRODUCT_ERROR', error));
//         return;
//       }

//       dispatch(ProductReducer.action('PRODUCT_FIND_BY_ID', data));
//     } catch (error) {
//       dispatch(ProductReducer.action('PRODUCT_ERROR', error));
//     }
//   };

// const save =
//   (product: Product) =>
//   async (dispatch: Dispatch): Promise<void> => {
//     try {
//       dispatch(ProductReducer.action('PRODUCT_REQUEST'));

//       const response = await ProductService.save(product);
//       const { data, error } = response;

//       if (error) {
//         dispatch(ProductReducer.action('PRODUCT_ERROR', error));
//         return;
//       }

//       dispatch(ProductReducer.action('PRODUCT_SAVE', data));
//     } catch (error) {
//       dispatch(ProductReducer.action('PRODUCT_ERROR', error));
//     }
//   };

// const updateById =
//   (id: string, query: Partial<Product>) =>
//   async (dispatch: Dispatch): Promise<void> => {
//     try {
//       dispatch(ProductReducer.action('PRODUCT_REQUEST'));

//       const response = await ProductService.updateById(id, query);
//       const { data, error } = response;

//       if (error) {
//         dispatch(ProductReducer.action('PRODUCT_ERROR', error));
//         return;
//       }

//       dispatch(ProductReducer.action('PRODUCT_UPDATE_BY_ID', data));
//     } catch (error) {
//       dispatch(ProductReducer.action('PRODUCT_ERROR', error));
//     }
//   };

// const deleteById =
//   (id: string) =>
//   async (dispatch: Dispatch): Promise<void> => {
//     try {
//       dispatch(ProductReducer.action('PRODUCT_REQUEST'));

//       const response = await ProductService.deleteById(id);
//       const { data, error } = response;

//       if (error) {
//         dispatch(ProductReducer.action('PRODUCT_ERROR', error));
//         return;
//       }

//       dispatch(ProductReducer.action('PRODUCT_DELETE_BY_ID', { id: data ? data.id : '' }));
//     } catch (error) {
//       dispatch(ProductReducer.action('PRODUCT_ERROR', error));
//     }
//   };

// export const ProductActions = {
//   findAll,
//   findById,
//   save,
//   updateById,
//   deleteById,
// };

export {};
