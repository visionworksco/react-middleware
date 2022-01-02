// import ProCard from '@ant-design/pro-card';
// import React, { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useDispatch, useSelector } from 'react-redux';
// import { State } from '../../store/StoreConfig';
// import { Titlable } from '../../type/Titlable';
// import { AppConfig } from '../app/AppConfig';
// import BasePageContainer from '../basePageContainer/BasePageContainer';
// import './Product.less';
// import { ProductActions } from './ProductActions';

// const BASE_TRANSLATION_NAMESPACE = 'Product';
// const BASE_CLASS_NAME = 'product';
// const { GUTTER } = AppConfig;

// type Props = Titlable;

// const Product = (props: Props): JSX.Element => {
//   const { title } = props;

//   const dispatch = useDispatch();
//   const { t } = useTranslation(BASE_TRANSLATION_NAMESPACE);

//   const productState = useSelector((state: State) => state.product);
//   const { loading: productLoading, data: productData, error: productError } = productState;
//   const products = productData.products;
//   console.warn('products', products);

//   get all products
//   useEffect(() => {
//     dispatch(ProductActions.findAll());
//   }, [dispatch]);

//   const loading = productLoading;
//   const error = productError;

//   return (
//     <div className={BASE_CLASS_NAME}>
//       <BasePageContainer title={title} isExtra={true} loading={loading} error={error}>
//         <ProCard direction='column' ghost={true} gutter={[0, GUTTER]}>
//           <ProCard style={{ height: 200 }} />
//           <ProCard style={{ height: 200 }} direction='row' ghost={true} gutter={GUTTER}>
//             <ProCard colSpan={16} />
//             <ProCard colSpan={8} />
//           </ProCard>
//         </ProCard>
//       </BasePageContainer>
//     </div>
//   );
// };

// export default Product;
export {};
