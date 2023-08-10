import React, { useEffect } from 'react'
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveProductDetailByProductId } from '../../store/productSlice';
import { useParams } from 'react-router-dom';

export const ProductDetailPage = () => {
  //Allows to dispatch actions to update the Redux store
  const dispatch = useDispatch();
  const {productId} = useParams();

  //Hook to select data from the Redux store state
  const { data: product, status: productStatus } = useSelector((state) => state.product);

  // useEffect will only run once on the initial render.
  useEffect(() => {
    // fetch product detail from the API and update the Redux store with the fetched data
    dispatch(retrieveProductDetailByProductId(productId));
  }, [productId]);
  return (
    <div>
        <ProductDetail product={product} status={productStatus}/>
    </div>
  )
}

export default ProductDetailPage;