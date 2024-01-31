import React,{useContext} from 'react'
import { ShopContext } from './Context';
import { FaRegTrashCan } from 'react-icons/fa6';

const CartItems = () => {
    const {
      AllProducts,
      addToCart,
      removeFromCart,
      cartItems,
      getTotalCartAmount,
    } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {AllProducts.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <>
              <div>
                <div className="cartitems-format">
                  <img src={e.image} alt=" " className="carticon-product" />
                  <p>{e.name}</p>
                  <p> ₹ {e.price} /-</p>
                  <button className="classitems-quantity">
                    {cartItems[e.id]}
                  </button>
                  <p>₹ {e.price * cartItems[e.id]} /-</p>
                  <FaRegTrashCan
                    className="remove-icon"
                    onClick={() => removeFromCart(e.id)}
                  />
                </div>
                <hr />
              </div>
            </>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>₹{0}</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>₹{getTotalCartAmount()}</h3>
          </div>
        </div>
        <button className="cartitems-btn">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
}

export default CartItems