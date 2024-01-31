import React from 'react';
import { FaAngleRight } from "react-icons/fa";


const Breadcrum = (props) => {

    const { product } = props;
  return (
    <div className="breadcrum">
      Home <FaAngleRight /> Products <FaAngleRight /> {product.name}
    </div>
  );
}

export default Breadcrum