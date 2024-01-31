import React,{useContext} from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { ShopContext } from "./Context";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt=" " />
          <img src={product.image} alt=" " />
          <img src={product.image} alt=" " />
          <img src={product.image} alt=" " />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt=" "
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStarHalfAlt className="star" />
          <p>(122)</p>
        </div>
        <p className="product-price">₹ {product.price} /-</p>
          {product.desc.split("\n").map((line, index) => {
            return (
              <section className="product-desc">
                <p key={index}>{line}</p>
                <br />
              </section>
            );
          })}
        <button className="btn" onClick={(e)=>addToCart(product.id,e)}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
