import React, { useContext } from 'react';
import { ShopContext } from '../Components/Context.jsx';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum.jsx';
import ProductDisplay from '../Components/ProductDisplay.jsx';

const Product = () => {

  const { AllProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = AllProducts.find((e) => e.id === Number(productId));
  return (
    <>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </>
  );
}

export default Product